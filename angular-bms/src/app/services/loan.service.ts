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

  getLoan(id: number): Observable<LoanModel> {
    return this.http.get<LoanModel>(`${this.baseUrl}/${id}`);
  }

  addLoan(loan: LoanModel): Observable<LoanModel> {
    return this.http.post<LoanModel>(this.baseUrl, loan);
  }
}
