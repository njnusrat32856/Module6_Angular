import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:8040/api/loans';

  constructor(private http: HttpClient) {}

  getAllLoans(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getLoanById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  applyForLoan(loan: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/applyloan`, loan);
  }

  approveLoan(id: number, approvedBy: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/approve`, approvedBy);
  }

  rejectLoan(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/reject`, null);
  }
}
