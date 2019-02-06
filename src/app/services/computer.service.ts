import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private baseUrl = 'http://localhost:8080/projetfinal/ordinateur';

  constructor(private http: HttpClient) { }

  getComputersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
