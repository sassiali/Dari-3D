import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:9090/users"

  constructor(private httpClient: HttpClient){}
 
}
