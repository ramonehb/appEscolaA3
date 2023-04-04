import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.page.html',
  styleUrls: ['./aluno-detalhe.page.scss'],
})

export class AlunoDetalhePage implements OnInit {
  formCadastroAluno: FormGroup;
  mensagens = {
    nome: [
      {tipo: 'required', mensagem: 'Nome é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Nome deve ter no mínimo 3 caracter'},
      {tipo: 'maxLength', mensagem: 'Nome deve ter no máximo 100 caracter'}
    ]
    ,
    cpf: [
      {tipo: 'required', mensagem: 'CPF é obrigatório.'},
      {tipo: 'maxLength', mensagem: 'CPF deve ter no máximo 11 caracter'}
    ],
    dataNascimento: [
      {tipo: 'required', mensagem: 'Data de nascimento é obrigatório.'}
    ],
    email: [
      {tipo: 'required', mensagem: 'E-mail é obrigatório.'},
      {tipo: 'maxLength', mensagem: 'E-mail deve ter no máximo 100 caracter'}
    ]
  };
  
  constructor(private formBuilder: FormBuilder) {
    this.formCadastroAluno = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      cpf: ['', Validators.compose([Validators.required, Validators.maxLength(11)])],
      dataNascimento: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(100)])]
    });
   }

  ngOnInit() {
  }

  public formValidator(campo: FormControl | AbstractControl): any {
    return { 'is-invalid': campo.errors && campo.touched};
  }

  get f(): any {
    return this.formCadastroAluno.controls;
  }
}
