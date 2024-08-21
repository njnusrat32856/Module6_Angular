import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../model/user/user.model';
import { AccountModel } from '../model/user/account.model';
import { TransactionModel } from '../model/user/transaction.model';
import { LoanModel } from '../model/user/loan.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3000/user";

  constructor(
    private http: HttpClient
  ) { }

  // Fetch user data
  getUserData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Update user account information
  updateAccount(accountId: number, accountData: Partial<AccountModel>): Observable<AccountModel> {
    return this.http.put<AccountModel>(`${this.baseUrl}/accounts/${accountId}`, accountData);
  }

  // Fetch transaction history for a specific account
  getTransactionHistory(accountId: number): Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>(`${this.baseUrl}/accounts/${accountId}/transactions`);
  }

  // Apply for a loan
  applyForLoan(loanData: LoanModel): Observable<LoanModel> {
    return this.http.post<LoanModel>(`${this.baseUrl}/loans`, loanData);
  }

  // Transfer funds between accounts
  transferFunds(transaction: TransactionModel): Observable<TransactionModel> {
    return this.http.post<TransactionModel>(`${this.baseUrl}/transactions`, transaction);
  }

  // Fetch loan details
  getLoans(): Observable<LoanModel[]> {
    return this.http.get<LoanModel[]>(`${this.baseUrl}/loans`);
  }


}
