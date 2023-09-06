import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.page.html',
  styleUrls: ['./usuario-detalhe.page.scss'],
})

export class UsuarioDetalhePage implements OnInit {
  usuarioId: number = 0;
  formUsuario: FormGroup;
  usuarioService =  new UsuarioService();
  textoBotao: string = 'Cadastrar';
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

    constructor(private formBuilder: FormBuilder, private alert: AlertService, private routerActive: ActivatedRoute, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
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

  get f(): any {
    return this.formUsuario.controls;
  }
  cadastrarUsuario(){
    const usuario = new Usuario(1,this.f.nome.value, this.f.login.value, this.f.email.value, this.f.senha.value, this.f.senhaConfirmacao.value, '../../../../assets/img/user.jpg');

    let bNovo = this.textoBotao === 'Cadastrar';
    if (bNovo){
      this.usuarioService.criarUsuario(usuario);
    }
    else {
      usuario.id = this.usuarioId;
      this.usuarioService.atualizarUsuario(usuario);
    }
    this.alert.toastAlert(bNovo ? 'Usuario cadastrado com sucesso' : 'Atualizado com sucesso', 'success', 'top');
    this.changeDetectorRef.detectChanges();
    this.router.navigateByUrl('/usuario');
  }

  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  toggleMostrarSenhaConfirma() {
    this.mostrarSenhaConfiirma = !this.mostrarSenhaConfiirma;
  }

  public carregarUsuario(){
    const id =  this.routerActive.snapshot.paramMap.get('id') ?? '9999';
    const usuario = this.usuarioService.selecionarUsuarioPorId(id);
    
    if (id === '9999'){
      this.limparFormulario();
    }else {
      this.textoBotao = 'Atualizar';

      this.usuarioId = parseInt(id);
      this.f.nome.value = usuario?.nome;
      this.f.login.value = usuario?.login;
      this.f.senha.value = usuario?.senha;
      this.f.senhaConfirmacao.value = usuario?.senha;
      this.f.email.value = usuario?.email;
    }
  }

  limparFormulario() {
    this.formUsuario.reset();
  }
}
