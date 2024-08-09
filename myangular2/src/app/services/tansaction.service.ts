import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TransactionModel } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TansactionService {
  private baseUrl = 'http://localhost:3000/transaction';

  constructor(
    private http: HttpClient

  ) { }

  getAllTransaction(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  getTransactionForAccount(): Observable<TransactionModel[]> {

    return this.http.get<TransactionModel[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
    )

  }

  private handleError(error:any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }
}
