import { Injectable } from '@angular/core';
import { REQUESTS } from './mock-requests';
import { Request } from './request.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getRequests(): Observable<Request[]> {
    // return of(REQUESTS);
    return this.http.get<Request[]>(`${this.url}/requests`);
  }

  getRequest(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.url}/requests/${id}`);
  }

  reserveRequest(request: Request): Observable<any> {
    return this.http.put(`${this.url}/reserve`, request, this.httpOptions);
  }

  dont_reserveRequest(request: Request): Observable<any> {
    return this.http.put(`${this.url}/dont_reserve`, request, this.httpOptions);
  }

  delete(request: Request): Observable<any> {
    return this.http.post(`${this.url}/delete`, request, this.httpOptions);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(`${this.url}/requests`, request, this.httpOptions);
  }

}
