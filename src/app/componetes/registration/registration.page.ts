import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formUsuario: FormGroup;
  mensagens = {
    nome: [
      {tipo: 'required', mensagem: 'Nome é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Nome deve ter no mínimo 3 caracter.'}
    ]
    ,
    login: [
      {tipo: 'required', mensagem: 'Login é obrigatório.'},
      {tipo: 'maxLength', mensagem: 'Login deve ter no máximo 20 caracter.'}
    ],
    senha: [
      {tipo: 'required', mensagem: 'Senha é obrigatório.'}
    ],
    senhaConfirmacao: [
      {tipo: 'required', mensagem: 'Confirme a senha.'},
    ],
    email: [
      {tipo: 'required', mensagem: 'E-mail é obrigatório.'}
    ]};

  constructor(private alert: AlertService, private formBuilder: FormBuilder) {
    this.formUsuario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      senhaConfirmacao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  mostrarSenha: boolean = false;
  mostrarSenhaConfiirma: boolean = false;

  ngOnInit() {
  }

  cadastrarUsuario(){
    this.alert.toastAlert('Usuário cadastrado com sucesso', 'success');
  }

  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  toggleMostrarSenhaConfirma() {
    this.mostrarSenhaConfiirma = !this.mostrarSenhaConfiirma;
  }

  get f(): any {
    return this.formUsuario.controls;
  }
}
