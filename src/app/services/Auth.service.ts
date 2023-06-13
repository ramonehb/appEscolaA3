import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor() { }

  validateLogin(username: string, password: string): boolean {
    var usuarios =  JSON.parse(localStorage.getItem('usuario') || '[]');
    var usuarioValido = false;
    for(const usuario of usuarios){
      usuarioValido = (username === usuario.login && password === usuario.senha) || username === "admin" && password === "123";
      if (usuarioValido){
        return usuarioValido;
      }
    }

    usuarioValido = username === "admin" && password === "123"
    
    return usuarioValido;
  }
}
