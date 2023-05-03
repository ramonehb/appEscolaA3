import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertService } from 'src/app/services/Alert.service';

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
              private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])]
    });
  }

  ngOnInit() {
  }

  validaLogin() {
    if (this.auth.validateLogin(this.formLogin.get('login')?.value, this.formLogin.get('senha')?.value)) {
      this.router.navigate(['/menu']);
      this.alert.toastAlert(`Bem vindo ${this.formLogin.get('login')?.value}`, 'success', 'top')
    } else {
      this.alert.toastAlert('Login/Senha inválido', 'danger', 'top')
    }
  }

  get f(): any {
    return this.formLogin.controls;
  }

  toggleMostrarSenhaConfirma() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
