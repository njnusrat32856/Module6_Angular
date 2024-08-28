import { Injectable } from '@angular/core';
import { Loan } from '../model/loan.model';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:3000/loans';  

  constructor(
    private http: HttpClient
  ) {}

  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  
  createLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.baseUrl, loan).pipe(
      catchError(this.handleError)
    );
  }

  getLoanById(id: string): Observable<Loan> {
    return this.http.get<Loan>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  

  // // Method to get a loan by ID
  // getLoanById(loanId: string): Observable<Loan> {
  //   return this.http.get<Loan>(`${this.apiUrl}/${loanId}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // Method to update a loan
  updateLoan(loan: Loan): Observable<Loan> {
    return this.http.put<Loan>(`${this.baseUrl}/${loan.id}`, loan).pipe(
      catchError(this.handleError)
    );
  }

  // Method to delete a loan
  deleteLoan(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Method to handle payment on a loan
  makePayment(id: string, paymentAmount: number): Observable<Loan> {
    return this.getLoanById(id).pipe(
      catchError(this.handleError),
      switchMap((loan) => {
        loan.balanceRemaining -= paymentAmount;
        if (loan.balanceRemaining <= 0) {
          loan.balanceRemaining = 0;
          loan.status = 'Paid';
        }
        return this.updateLoan(loan);
      })
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
    // return throwError(
    //   'Something went wrong; please try again later.');
  }
}
