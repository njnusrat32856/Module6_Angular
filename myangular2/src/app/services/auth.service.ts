import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { UserModel } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3000/users';  // Replace with your actual auth API URL
  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser: Observable<UserModel | null>;

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = this.getLocalStorageItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(name: string, email: string, password: string, role: string): Observable<UserModel | null> {
    const newUser: UserModel = { id: '', name, email, password, role };
    return this.http.post<UserModel>(this.authUrl, newUser).pipe(
      map(user => user || null),
      catchError(error => {
        console.error('Registration error', error);
        return of(null);
      })
    );
  }

  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<UserModel | null> {
    return this.http.post<AuthResponse>(this.authUrl, { email, password })
      .pipe(
        map((response: AuthResponse) => {
          if (response && response.token) {
            this.setLocalStorageItem('token', response.token);
            this.setLocalStorageItem('currentUser', JSON.stringify(response.user));
            this.currentUserSubject.next(response.user);
          }
          return response.user;
        }),
        catchError(error => {
          console.error('Login error', error);
          return of(null);
        })
      );
  }

  logout(): void {
    this.removeLocalStorageItem('token');
    this.removeLocalStorageItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.getLocalStorageItem('token');
  }

  getToken(): string | null {
    return this.getLocalStorageItem('token');
  }

  // Safe localStorage access methods
  private getLocalStorageItem(key: string): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  }
}