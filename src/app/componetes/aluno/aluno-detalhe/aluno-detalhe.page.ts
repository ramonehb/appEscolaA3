import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/Aluno'; // Substitua o caminho pelo local onde o arquivo aluno.ts está localizado em seu projeto
import { AlunoService } from 'src/app/services/aluno.service';
@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.page.html',
  styleUrls: ['./aluno-detalhe.page.scss'],
})


export class AlunoDetalhePage implements OnInit {
  alunoId: number = 0;
  formCadastroAluno: FormGroup;
  raAluno: number | undefined;
  textoBotao: string = 'Cadastrar';
  alunoService =  new AlunoService();
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
    ],
    sexo: [
      {tipo: 'required', mensagem: 'Sexo é obrigatório.'}
    ]};

  constructor(private formBuilder: FormBuilder, private alert: AlertService, private routerActive: ActivatedRoute, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    this.formCadastroAluno = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(100)])],
      sexo: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.carregarAluno();
  }

  get f(): any {
    return this.formCadastroAluno.controls;
  }

  gerarNumeroAleatorio(): number {
    let numero = '';
    const caracteres = '0123456789';
  
    for (let i = 0; i < 8; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      numero += caracteres.charAt(indiceAleatorio);
    }
  
    return parseInt(numero);
  }

  public cadastrarAluno(){

    const ra = this.gerarNumeroAleatorio();
    const aluno = new Aluno(this.f.nome.value, this.f.cpf.value, new Date(), this.f.sexo.value, this.f.email.value, 1, '../../../../assets/img/user.jpg', ra);
    
    let bNovo = this.textoBotao === 'Cadastrar';
    if (bNovo){
      this.alunoService.criarAluno(aluno);
    }
    else {
      aluno.id = this.alunoId;
      this.alunoService.atualizarAluno(aluno);
    }
    this.alert.toastAlert(bNovo ? 'Aluno cadastrado com sucesso' : 'Aluno atualizado com sucesso' , 'success', 'top');
    this.changeDetectorRef.detectChanges();
    this.router.navigateByUrl('/aluno');
  }

  public carregarAluno(){
    const id =  this.routerActive.snapshot.paramMap.get('id') ?? '9999';
    const aluno = this.alunoService.selecionarAlunoPorId(id);

    if (id === '9999'){
      this.limparFormulario();
    }else {
      this.textoBotao = 'Atualizar';

      this.alunoId = parseInt(id);
      this.f.nome.value = aluno?.nome;
      this.f.cpf.value = aluno?.cpf;
      this.f.dataNascimento.setValue(aluno?.dataNascimento.toString().substring(0, 10));
      this.f.sexo.value = aluno?.sexo;
      this.f.email.value = aluno?.email;
      this.raAluno = aluno?.ra;
    }
  }

  limparFormulario() {
    this.formCadastroAluno.reset();
  }
}
