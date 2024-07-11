import { Injectable } from '@angular/core';
import { GoogleService } from './google.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:9090/users";


  constructor(private httpClient: HttpClient
    ,private googleService:GoogleService){}

  getUserByEmail(email: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/findByEmail/${email}`);
  }
}
