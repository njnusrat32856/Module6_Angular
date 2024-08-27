import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:3000/accounts';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  getAccountById(aid: string): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${aid}`);
  }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.apiUrl}/${account.aid}`, account);
  }

  deleteAccount(aid: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${aid}`);
  }

  generateAccountNumber(): string {
    // const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomNumbers = '0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      // result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      result += randomNumbers.charAt(Math.floor(Math.random() * randomNumbers.length));
    }
    return result;
  }

  
}
