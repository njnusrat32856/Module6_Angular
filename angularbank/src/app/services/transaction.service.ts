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
      amount: -amount,
      date: new Date(),
      description: 'Withdraw'
    };
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }


  // Create a new transaction
  createFundTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }

  

  // Utility method to generate unique IDs
  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 6);
  }

  // calculateTotalAmount(accountNumber: string): Observable<number> {
  //   return this.getTransactionHistory(accountNumber).pipe(
  //     map(transactions => {
  //       return transactions.reduce((total, transaction) => {
  //         if (transaction.type === 'Deposit') {
  //           return total + transaction.amount;  // Add deposit amount
  //         } else if (transaction.type === 'Transfer' || transaction.type === 'Withdraw') {
  //           return total - transaction.amount;  // Subtract transfer out or withdrawal amount
  //         }
  //         return total;
  //       }, 0);
  //     })
  //   );
  // }

  


  // Method to transfer funds
  // transfer(sourceAccountNumber: string, targetAccountNumber: string, amount: number): Observable<Transaction[]> {
  //   const sourceTransaction: Transaction = {
  //     tid: this.generateUniqueId(),
  //     accountNumber: sourceAccountNumber,
  //     type: 'Transfer',
  //     amount,
  //     date: new Date(),
  //     description: `Transfer to ${targetAccountNumber}`,
  //     targetAccountNumber
  //   };

  //   const targetTransaction: Transaction = {
  //     tid: this.generateUniqueId(),
  //     accountNumber: targetAccountNumber,
  //     type: 'Transfer',
  //     amount,
  //     date: new Date(),
  //     description: `Transfer from ${sourceAccountNumber}`,
  //     targetAccountNumber: sourceAccountNumber
  //   };

  //   return this.http.post<Transaction[]>(this.apiUrl, [sourceTransaction, targetTransaction]);
  // }
}
