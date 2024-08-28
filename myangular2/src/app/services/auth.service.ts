import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { UserModel } from '../model/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponse } from '../model/auth-response';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/users';

  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser$: Observable<UserModel | null>;

  constructor(
    private http: HttpClient,
    // private router: Router
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {
    const storedUser = this.isBrower() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();

    // const storedUser = this.getLocalStorageItem('currentUser');
    // this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser ? JSON.parse(storedUser) : null);
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  private isBrower(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getUserRole(): any {
    return this.currentUserValue?.role;
  }
  private get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }
  getToken(): string | null {
    return this.isBrower() ? localStorage.getItem('token') : null;
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  registration(user: UserModel): Observable<AuthResponse> {

    return this.http.post<UserModel>(this.baseUrl, user).pipe(

      map(
        (newUser: UserModel) => {
          const token = btoa(`${newUser.email}${newUser.password}`);
          return { token, user: newUser } as AuthResponse;
        }
      )
    )
  }

  

  storeUserProfile(user: UserModel): void {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }

  getUserProfileFromStorage(): UserModel | null {
    const userProfile = localStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile): null;
  }

  private setCurrentUser(user: UserModel): void {
    if (this.isBrower()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
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
            throw new Error('Invalid Password');
          }
        } else {
          throw new Error('User Not Found');

        }
      }
      ),
      catchError(err => {
        console.error('Login Error', err);
        throw err;
      })
    )
  }

  private clearCurrentUser(): void {
    if (this.isBrower()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  logout(): void {
    this.clearCurrentUser();
    if (this.isBrower()) {
      localStorage.removeItem('token');

    }
  }
  
  removeUserDetails() {
    localStorage.clear();
  }

  // login(email: string, password: string): Observable<UserModel | null> {
  //   return this.http.post<AuthResponse>(this.baseUrl, { email, password })
  //     .pipe(
  //       map((response: AuthResponse) => {
  //         if (response && response.token) {
  //           this.setLocalStorageItem('token', response.token);
  //           this.setLocalStorageItem('currentUser', JSON.stringify(response.user));
  //           this.currentUserSubject.next(response.user);
  //         }
  //         return response.user;
  //       }),
  //       catchError(error => {
  //         console.error('Login error', error);
  //         return of(null);
  //       })
  //     );
  // }

  // logout(): void {
  //   this.removeLocalStorageItem('token');
  //   this.removeLocalStorageItem('currentUser');
  //   this.currentUserSubject.next(null);
  //   this.router.navigate(['/login']);
  // }



  // getToken(): string | null {
  //   return this.getLocalStorageItem('token');
  // }

  
}