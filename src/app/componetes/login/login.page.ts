import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertService } from 'src/app/services/Alert.service';
import { TokenService } from 'src/app/services/token.service';
import { Token } from 'src/app/models/Token';
import { TokenRetorno } from 'src/app/models/TokenRetorno';

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
      {tipo: 'minLength', mensagem: 'Login deve ter no mínimo 2 caracter'},
      {tipo: 'maxLength', mensagem: 'Login deve ter no máximo 15 caracter'}
    ],
    senha: [
      {tipo: 'required', mensagem: 'Senha é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Senha deve ter no mínimo 2 caracter'},
      {tipo: 'maxLength', mensagem: 'Senha deve ter no máximo 15 caracter'}
    ]
  };

  constructor(private auth: AuthService,
              private router: Router,
              private alert: AlertService,
              private tokenService: TokenService,
              private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])]
    });
  }

  ngOnInit() {
  }

  validaLogin() {

    var user = this.formLogin.get('login')?.value;
    var password = this.formLogin.get('senha')?.value;

    this.tokenService.post(new Token(user, password)).subscribe(
      (tokenRetorno: TokenRetorno) => {
        this.alert.toastAlert(`Bem vindo ${user}`, 'success', 'top')
        sessionStorage.setItem('token', JSON.stringify(tokenRetorno));
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Erro ao obter token:', error);
        this.alert.toastAlert(error.error, 'danger', 'top')
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
