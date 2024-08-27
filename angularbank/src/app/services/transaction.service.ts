import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:3000/transactions';

  constructor(
    private http: HttpClient
  ) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  
  getTransactionHistory(accountNumber: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}?accountNumber=${accountNumber}`);
  }

  // Method to make a deposit
  deposit(accountNumber: string, amount: number): Observable<Transaction> {
    const transaction: Transaction = {
      tid: this.generateUniqueId(),
      accountNumber,
      type: 'Deposit',
      amount,
      date: new Date(),
      description: 'Deposit'
    };
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  // Method to make a withdrawal
  withdraw(accountNumber: string, amount: number): Observable<Transaction> {
    const transaction: Transaction = {
      tid: this.generateUniqueId(),
      accountNumber,
      type: 'Withdraw',
      amount,
      date: new Date(),
      description: 'Withdraw'
    };
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  // Method to transfer funds
  transfer(sourceAccountNumber: string, targetAccountNumber: string, amount: number): Observable<Transaction[]> {
    const sourceTransaction: Transaction = {
      tid: this.generateUniqueId(),
      accountNumber: sourceAccountNumber,
      type: 'Transfer',
      amount,
      date: new Date(),
      description: `Transfer to ${targetAccountNumber}`,
      targetAccountNumber
    };

    const targetTransaction: Transaction = {
      tid: this.generateUniqueId(),
      accountNumber: targetAccountNumber,
      type: 'Transfer',
      amount,
      date: new Date(),
      description: `Transfer from ${sourceAccountNumber}`,
      targetAccountNumber: sourceAccountNumber
    };

    return this.http.post<Transaction[]>(this.apiUrl, [sourceTransaction, targetTransaction]);
  }

  // Utility method to generate unique IDs
  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
