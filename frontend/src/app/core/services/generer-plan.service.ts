import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenererPlanService {
  private baseURL = "http://localhost:9090/api/floorplan";

  constructor(private httpClient: HttpClient) {}

  generateFloorPlan(description: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(`${this.baseURL}/generate`, description, { headers, responseType: 'blob' });
  }
}