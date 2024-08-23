import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionModel } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:3000/transactions';

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>(this.baseUrl);
  }

  getTransactionById(id: number): Observable<TransactionModel> {
    return this.http.get<TransactionModel>(`${this.baseUrl}/${id}`);
  }

  addTransaction(transaction: TransactionModel): Observable<TransactionModel> {
    return this.http.post<TransactionModel>(this.baseUrl, transaction);
  }
}
