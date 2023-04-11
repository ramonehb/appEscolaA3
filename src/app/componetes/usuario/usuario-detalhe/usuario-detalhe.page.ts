import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-registration',
  templateUrl: './usuario-detalhe.page.html',
  styleUrls: ['./usuario-detalhe.page.scss'],
})
export class UsuarioDetalhePage implements OnInit {

  formUsuario: FormGroup;
  mensagens = {
    nome: [
      {tipo: 'required', mensagem: 'Nome é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Nome deve ter no mínimo 3 caracter.'}
    ]
    ,
    login: [
      {tipo: 'required', mensagem: 'Login é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Login deve ter no mínimo 3 caracter.'},
      {tipo: 'maxLength', mensagem: 'Login deve ter no máximo 20 caracter.'}
    ],
    senha: [
      {tipo: 'required', mensagem: 'Senha é obrigatório.'}
    ],
    senhaConfirmacao: [
      {tipo: 'required', mensagem: 'Confirme a senha.'},
    ],
    email: [
      {tipo: 'required', mensagem: 'E-mail é obrigatório.'},
      {tipo: 'email', mensagem: 'Digite um e-mail valido.'}
    ]};

  constructor(private alert: AlertService, private formBuilder: FormBuilder,  private routerActive: ActivatedRoute) {
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
    this.carregarUsuario();
  }

  cadastrarUsuario(){
    this.alert.toastAlert('Usuário cadastrado com sucesso', 'success', 'top');
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

  public carregarUsuario(){
    const id =  this.routerActive.snapshot.paramMap.get('id');
    console.log(id);
  }
}
