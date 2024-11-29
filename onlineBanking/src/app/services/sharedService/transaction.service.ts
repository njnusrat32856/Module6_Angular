import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8040/api/transactions';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getTransactionsByAccountId(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/${accountId}`);
  }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, transaction);
  }
}
