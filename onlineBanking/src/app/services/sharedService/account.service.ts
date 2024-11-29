import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8040/api/accounts';

  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getAccountById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAccountsByCustomerId(customerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/${customerId}`);
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, account);
  }

  updateAccountBalance(id: number, balance: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/balance`, { balance });
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
