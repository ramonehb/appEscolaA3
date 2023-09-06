import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/Token';
import { TokenRetorno } from '../models/TokenRetorno';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private http: HttpClient) { }

  //private baseURL = 'https://localhost:7228/api';
  private baseURL = 'http://localhost:5101/api';

  public post(token: Token): Observable<TokenRetorno>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    return this.http
      .post<TokenRetorno>(`${this.baseURL}/token`, JSON.stringify(token), {headers})
      .pipe();
  }
}
