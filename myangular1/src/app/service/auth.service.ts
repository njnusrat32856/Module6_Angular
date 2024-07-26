import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient
  ) { }

  // registration(user: UserModel): Observable<AuthResponse> {

  // }

}
