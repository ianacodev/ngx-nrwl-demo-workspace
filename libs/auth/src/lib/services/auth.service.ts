import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// models
import { Authenticate } from '@demo-app/data-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * login
   * @param authenticate
   * @returns
   */
  login(authenticate: Authenticate): Observable<any> {
    const url = 'http://localhost:3000/login';
    return this.http.post<any>(url, authenticate);
  }
}
