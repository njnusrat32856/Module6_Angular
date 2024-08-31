import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:3000/accounts';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  getAccountById(accountNumber: string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/${accountNumber}`);
  }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.baseUrl, account);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.baseUrl}/${account.id}`, account);
  }

  deleteAccount(aid: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${aid}`);
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

  getAccountsByUser(id: string): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.baseUrl}?userId=${id}`);
  }
  // getAccountsByUser(userId: string): Observable<Account> {
  //   return this.http.get<Account>(`${this.baseUrl}/${userId}`);
  // }

  createOrUpdateAccount(account: Account): Observable<Account> {
    if (account.accountNumber) {
      return this.http.put<Account>(`${this.baseUrl}/${account.accountNumber}`, account);
    } else {
      return this.http.post<Account>(this.baseUrl, account);
    }
  }

  updateAccountBalance(accountId: string, amount: number): Observable<Account> {
    return this.http.patch<Account>(`${this.baseUrl}/${accountId}`, { currentBalance: amount });
  }

  
}
