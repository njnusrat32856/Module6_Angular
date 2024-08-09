import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:3000/account';

  constructor(
    private http: HttpClient
  ) { }

  getAccountInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/account`);
  }

  getAccountBalance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/balance`);
  }

  getAccountTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/transactions`);
  }

  updateAccountInfo(accountInfo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/account`, accountInfo);
  }
}