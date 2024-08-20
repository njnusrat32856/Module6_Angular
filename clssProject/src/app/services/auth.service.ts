import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserModel } from '../model/user.model';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/user";

  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser$: Observable<UserModel | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object  // Injecting PLATFORM_ID to check if it's browser
  ) {
    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  registration(user: UserModel): Observable<AuthResponse> {

    return this.http.post<UserModel>(this.baseUrl, user).pipe(

      map(
        (newUser: UserModel) => {
          const token = btoa(`${newUser.email}${newUser.password}`);
          return { token, user: newUser } as AuthResponse;

        })
    )
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    let params = new HttpParams();
    params = params.append('email', credentials.email);

    return this.http.get<UserModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.storeUserProfile(user);
            this.setCurrentUser(user);
            return { token, user } as AuthResponse;
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(err => {
        console.error('Login error', err);
        throw err;
      })
    );
  }
  private setCurrentUser(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  // logout(): void {
  //   localStorage.removeItem('token');
  // }
  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
    // localStorage.removeItem('token');
  }

  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }
  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // getToken() {
  //   if (typeof localStorage !== 'undefined') {
  //     return localStorage.getItem('token');
  //   }
  //   return null;
  // }

  removeUserDetails() {
    localStorage.clear();

  }

  storeUserProfile(user: UserModel): void {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }

  getUserProfileFromStorage(): UserModel | null {
    const userProfile = localStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile) : null;
  }

  getUserRole(): any  {
    return this.currentUserValue?.role;
  }
}
