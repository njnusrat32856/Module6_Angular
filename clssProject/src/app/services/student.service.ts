import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/student/";

  constructor(
    private http: HttpClient
  ) { }

  viewAllStudent(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.baseUrl, student);
  }

  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${studentId}`);
    // return this.http.delete<void>(this.baseUrl+studentId);
  }

  getStudentById(studentId: string): Observable<StudentModel> {
    const url = `${this.baseUrl}${studentId}`;
    return this.http.get<StudentModel>(url);
  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    const url = `${this.baseUrl}${student.id}`;
    return this.http.put<StudentModel>(url, student);
  }
}
