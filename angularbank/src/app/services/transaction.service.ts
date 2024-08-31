import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:3000/transactions';

  constructor(
    private http: HttpClient
  ) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }

  
  getTransactionHistory(accountNumber: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}?accountNumber=${accountNumber}`);
  }

  // Method to make a deposit
  deposit(accountNumber: string, amount: number): Observable<Transaction> {
    const transaction: Transaction = {
      tid: this.generateUniqueId(),
      accountNumber,
      type: 'Deposit',
      amount: amount,
      date: new Date(),
      description: 'Deposit'
    };
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }

  // Method to make a withdrawal
  withdraw(accountNumber: string, amount: number): Observable<Transaction> {
    const transaction: Transaction = {
      tid: this.generateUniqueId(),
      accountNumber,
      type: 'Withdraw',
      amount: amount,
      date: new Date(),
      description: 'Withdraw'
    };
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }


  // Create a new transaction
  createFundTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }

  

  
  private generateUniqueId(): string {
    return Math.random().toString(36).substr( 2, 6);
  }

  
}
