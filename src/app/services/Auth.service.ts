import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  validateLogin(username: string, password: string): boolean {

  }
}
