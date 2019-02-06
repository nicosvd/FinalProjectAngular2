import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers: HttpHeaders;
  authenticated: boolean = false;
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient, private router: Router) { }

  authenticate (credentials: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`,credentials);
}
}
