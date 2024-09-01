import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/users';

  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser$: Observable<UserModel | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
   }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
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

  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  getUserRole(): any {
    return this.currentUserValue?.role;
  }

  private setCurrentUser(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  storeUserProfile(user: UserModel): void {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }

  getUserProfileFromStorage(): UserModel | null {
    const userProfile = localStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile): null;
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
  getAccountsByUser(id: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}?userId=${id}`);
  }

  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');

    }
  }
  
  // removeUserDetails() {
  //   localStorage.clear();
  // }

  removeUserDetails(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

}
