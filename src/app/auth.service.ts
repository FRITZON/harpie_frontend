import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({  
  providedIn: 'root'  
})  
export class AuthService {  
  private apiUrl = 'https://your-api-endpoint.com/auth';  

  constructor(private http: HttpClient) {}  

  // Sign in method  
  signin(email: string, password: string): Observable<any> {  
    const body = { email, password };  
    return this.http.post(`${this.apiUrl}/signin`, body);  
  }  

  // Sign up method  
  signup(name: string, email: string, password: string): Observable<any> {  
    const body = { name, email, password };  
    return this.http.post(`${this.apiUrl}/signup`, body);  
  }  

  // Forgot password method  
  forgotPassword(email: string): Observable<any> {  
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });  
  }  

  // Reset password method  
  resetPassword(email: string, token: string, newPassword: string): Observable<any> {  
    const body = { email, token, newPassword };  
    return this.http.post(`${this.apiUrl}/reset-password`, body);  
  }  
}