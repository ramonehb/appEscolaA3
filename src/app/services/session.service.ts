import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor() { }

  private isAuthenticated: boolean = false;
  
  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
