import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://harpie-app.site/api/v1'; // Base API URL


  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register/`, user);
  }

  signin(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login/`, user);
  }

   requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/request-password-reset/`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, { token, newPassword });
  }
}
