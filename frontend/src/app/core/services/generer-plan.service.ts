import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

    const payload = { description };

    console.log('Payload:', payload);
    console.log('Headers:', headers);

    return this.httpClient.post(`${this.baseURL}/generateAndConvert`, payload, { headers, responseType: 'blob' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.error('Error response body:', error.error);
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}