import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanModel } from '../model/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:3000/loans';

  constructor(
    private http: HttpClient
  ) { }

  getLoans(): Observable<LoanModel[]> {
    return this.http.get<LoanModel[]>(this.baseUrl);
  }

  getLoanById(id: number): Observable<LoanModel> {
    return this.http.get<LoanModel>(`${this.baseUrl}/${id}`);
  }

  // addLoan(loan: LoanModel): Observable<LoanModel> {
  //   return this.http.post<LoanModel>(this.baseUrl, loan);
  // }

  applyForLoan(loan: LoanModel): Observable<any> {
    return this.http.post(this.baseUrl, loan);
  }

  // updateLoanStatus(id: number, updatedLoan: LoanModel): Observable<LoanModel> {
  //   return this.http.put<LoanModel>(`${this.baseUrl}/${id}`, updatedLoan);
  // }

  updateLoanStatus(id: number, status: string): Observable<LoanModel> {
    return this.http.patch<LoanModel>(`${this.baseUrl}/${id}`, { status });
  }

  // Pay loan (update balance)
  payLoan(id: number, payment: number): Observable<LoanModel> {
    return this.http.patch<LoanModel>(`${this.baseUrl}/${id}`, { payment });
  }
}
