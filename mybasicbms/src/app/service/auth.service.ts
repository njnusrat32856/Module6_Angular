import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/login';

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {

    let params = new HttpParams();
    params = params.append('email', credentials.email);
    // params = params.append('password', credentials.password);

    return this.http.get<UserModel[]>(`${this.baseUrl}`, { params })
      .pipe(
        map(users => {
          if (users.length > 0) {
            const user = users[0];
            if (user.password === credentials.password) {
              const token = btoa(`${user.email}:${user.password}`);
              this.storeUserProfile(user);
              return { token, user } as AuthResponse;
            } else {
              throw new Error('Invalid Password');
            }

          } else {
            throw new Error('User not Found');
          }
        }),
        catchError(err => {
          console.error('Login error', err);
          throw err;
        })
      );
  }

  // login(email: string, username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   const body = {
  //     email,
  //     username,
  //     password
  //   };
  //   return this.http.post(`${this.baseUrl}/login`, body, { headers });
  // }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('token');
  // }

  getToken() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  storeUserProfile(user: UserModel): void {
    localStorage.setItem('userProfile', JSON.stringify(user));
  }

  removeUserDetails(){
    localStorage.clear();

  }
}
