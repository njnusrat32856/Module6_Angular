import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:3000/accounts';

  constructor(
    private http: HttpClient
  ) { }

  getAccounts(): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>(this.baseUrl);
  }

  getAccountById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addAccount(account: AccountModel): Observable<AccountModel> {
    return this.http.post<AccountModel>(this.baseUrl, account);
  }

  updateAccount(id: string,account: AccountModel): Observable<any> {
    return this.http.put(`${this.baseUrl}/${account.id}`, account);
  }

  deleteAccount(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
