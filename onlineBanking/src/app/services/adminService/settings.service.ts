import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private baseUrl = 'http://localhost:8040/api/settings';

  constructor(private http: HttpClient) {}

  getAllSettings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getSettingByKey(key: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${key}`);
  }

  updateSetting(key: string, value: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${key}`, { value });
  }
}