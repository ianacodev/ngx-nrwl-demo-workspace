import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
// models
import { Authenticate } from '@demo-app/data-models';
import { User } from '@demo-app/data-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * login
   * @param authenticate
   * @returns
   */
  login(authenticate: Authenticate): Observable<User> {
    const url = 'http://localhost:3000/login';
    return this.http.post<User>(url, authenticate).pipe(
      tap((user: User) => {
        this.userSubject$.next(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }
}
