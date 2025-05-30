import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserModel } from '../model/user.model';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


   baseUrl: string = "http://localhost:3000/users";

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

  registration(user: UserModel): Observable<AuthResponse> {
    return this.http.post<UserModel>(this.baseUrl, user).pipe(
      map((newUser: UserModel) => {
        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as AuthResponse;
      }),
      
    );
  }



  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    let params = new HttpParams();
    params.append('email', credentials.email);

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
      catchError(error => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  

  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
  }

  private setCurrentUser(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  getUserRole(): any  {
    return this.currentUserValue?.role;
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  storeUserProfile(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getUserProfileFromStorage(): UserModel | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }

  removeUserDetails(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

}
