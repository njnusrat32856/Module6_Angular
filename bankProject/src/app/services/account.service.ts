import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../model/user/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = 'http://localhost:3000/accounts';  

  constructor(private http: HttpClient) {}

  // Fetch all accounts
  getAccounts(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  // Fetch an account by ID
  getAccountById(accountId: number): Observable<AccountModel> {
    return this.http.get<AccountModel>(`${this.baseUrl}/${accountId}`);
  }

  // Create a new account
  createAccount(account: AccountModel): Observable<AccountModel> {
    return this.http.post<AccountModel>(this.baseUrl, account);
  }

  // Update an existing account
  updateAccount(accountId: number, account: AccountModel): Observable<AccountModel> {
    return this.http.put<AccountModel>(`${this.baseUrl}/${accountId}`, account);
  }

  // Delete an account
  deleteAccount(accountId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${accountId}`);
  }
}
