import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GoogleService } from './google.service';
import { jwtDecode } from 'jwt-decode'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:9090/api/auth";
  private accessTokenKey = 'access_token';


  constructor(private httpClient: HttpClient
    ,private googleService:GoogleService){}

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/login`, { email, password });
  }

  register(user: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/register`, user);
  }
 
  logout(): void {
    this.clearAccessToken();
  }


  forgotPassword(email: string): Observable<any> {
    return this.httpClient.put<any>(`${this.baseURL}/forgetPassword`, null, { params: { email } });
  }

  resetPassword(email: string, newPass: string): Observable<any> {
    return this.httpClient.put<any>(`${this.baseURL}/resetPassword`, null, { params: { email, newPass } });
  }


  ////user connected////
  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  clearAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }

  getUserInfo(): any {
    const token = this.getAccessToken();
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }

  //user connected 

  isUserLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}