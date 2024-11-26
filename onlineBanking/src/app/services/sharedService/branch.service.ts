import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private baseUrl = 'http://localhost:8040/api/branchs';

  constructor(private http: HttpClient) {}

  getAllBranches(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getBranchById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBranch(branch: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, branch);
  }

  updateBranch(id: number, branch: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, branch);
  }

  deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
