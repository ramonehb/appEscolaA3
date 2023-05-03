import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  validateLogin(username: string, password: string): boolean {
    return (username === 'admin' && password === '123' || username === 'humberto' && password === '123')
  }
}
