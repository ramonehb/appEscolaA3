import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/Alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.page.html',
  styleUrls: ['./aluno-detalhe.page.scss'],
})

export class AlunoDetalhePage implements OnInit {
  alunoId: number = 0;
  formCadastroAluno: FormGroup;
  mensagens = {
    nome: [
      {tipo: 'required', mensagem: 'Nome é obrigatório.'},
      {tipo: 'minLength', mensagem: 'Nome deve ter no mínimo 3 caracter'}
    ]
    ,
    cpf: [
      {tipo: 'required', mensagem: 'CPF é obrigatório.'},
      {tipo: 'minLength', mensagem: 'CPF deve ter 11 caracteres'},
      {tipo: 'maxLength', mensagem: 'CPF deve ter no máximo 11 caracteres.'}
    ],
    dataNascimento: [
      {tipo: 'required', mensagem: 'Data de nascimento é obrigatório.'}
    ],
    email: [
      {tipo: 'required', mensagem: 'E-mail é obrigatório.'},
      {tipo: 'email', mensagem: 'Digite um e-mail valido.'},
      {tipo: 'maxLength', mensagem: 'E-mail deve ter no máximo 100 caracteres.'}
    ]};

  constructor(private formBuilder: FormBuilder, private alert: AlertService, private routerActive: ActivatedRoute, private router: Router) {
    this.formCadastroAluno = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(100)])]
    });
   }

  ngOnInit() {
    this.carregarAluno();
  }

  get f(): any {
    return this.formCadastroAluno.controls;
  }

  public cadastrarAluno(){
    this.alert.toastAlert('Aluno cadastrado com sucesso', 'success', 'top');
    this.router.navigate(['/aluno']);
  }

  public carregarAluno(){
    const id =  this.routerActive.snapshot.paramMap.get('id');
    console.log(id);
  }
}
