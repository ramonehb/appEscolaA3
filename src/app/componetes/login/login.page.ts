import { Component, OnInit} from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertService } from 'src/app/services/Alert.service';
import { TokenService } from 'src/app/services/token.service';
import { Token } from 'src/app/models/Token';
import { TokenRetorno } from 'src/app/models/TokenRetorno';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  formLogin: FormGroup;
  mostrarSenha: boolean = false;
  mensagens = {
    login: [
      {tipo: 'required', mensagem: 'Login é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Login deve ter no mínimo 3 caracter'},
      {tipo: 'maxLength', mensagem: 'Login deve ter no máximo 25 caracter'}
    ],
    senha: [
      {tipo: 'required', mensagem: 'Senha é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Senha deve ter no mínimo 3 caracter'},
      {tipo: 'maxLength', mensagem: 'Senha deve ter no máximo 20 caracter'}
    ]
  };

  constructor(private router: Router,
              private alert: AlertService,
              private tokenService: TokenService,
              private formBuilder: FormBuilder,
              private sessionService: SessionService,
              private render: Renderer2,) {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])]
    });
  }

  ngOnInit() {
    var theme = sessionStorage.getItem('color-theme');
    this.render.setAttribute(document.body, 'color-theme',  theme === null || theme === 'light' ? 'light' : theme);
    this.sessionService.logout();
  }

  validaLogin() {
    var user = this.formLogin.get('login')?.value;
    var password = this.formLogin.get('senha')?.value;

    this.tokenService.post(new Token(user, password)).subscribe(
      (tokenRetorno: TokenRetorno) => {
        sessionStorage.setItem('token', JSON.stringify(tokenRetorno));
      
        this.alert.toastAlert(`Bem vindo ${user}`, 'success', 'top');
        this.router.navigate(['/menu']);
        this.sessionService.login();
      },
      (error) => {
        console.error('Erro ao obter token:', error);
      
        this.alert.toastAlert(error.error, 'danger', 'top');
      }
    );
  }

  get f(): any {
    return this.formLogin.controls;
  }

  toggleMostrarSenhaConfirma() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
