import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportTicketsService {

  private baseUrl = 'http://localhost:8040/api/supporttickets';

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getTicketsByCustomerId(customerId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/${customerId}`);
  }

  createTicket(ticket: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, ticket);
  }

  updateTicketStatus(ticketId: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${ticketId}`, { status });
  }
}
