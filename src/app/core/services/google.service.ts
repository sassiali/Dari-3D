import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDto } from '../models/TokenDto';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  private baseURL = "http://localhost:9090/api/google";
  token: string = "";


  constructor(private httpClient: HttpClient){}
  getAuthUrl(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/auth/url`);
  }

 
  getToken(code: string): Observable<TokenDto> {
    return this.httpClient.get<TokenDto>(`${this.baseURL}/auth/callback?code=${code}`);
  }
  private accessToken: string;

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.httpClient.get<any>('https://www.googleapis.com/oauth2/v3/userinfo', { headers });
  }
}
