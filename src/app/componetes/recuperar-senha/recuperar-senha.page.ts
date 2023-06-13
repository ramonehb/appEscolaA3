import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  formEsqueciSenha: FormGroup;
  mensagens = {
    email: [
      {tipo: 'required', mensagem: 'E-mail é obrigatório.'},
      {tipo: 'email', mensagem: 'Digite um e-mail valido.'}
    ]};

  constructor(private alert: AlertService,  private formBuilder: FormBuilder, private router: Router) {
    this.formEsqueciSenha = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit() {
  }

  recuperarSenha(){
    let email = this.formEsqueciSenha.get('email')?.value;

    if (this.validaEmail(email)){
      this.alert.toastAlert('E-mail enviado', 'success', 'top');
      this.router.navigate(['/login']);    
    }
    else {
      this.alert.toastAlert('E-mail não localizado', 'danger', 'top');
    }
  }

  get f(): any {
    return this.formEsqueciSenha.controls;
  }

  validaEmail(email: String): boolean {
    let valido = false;

    for(const usuario of JSON.parse(localStorage.getItem('usuario') || '[]')){
      if (usuario.email === email){
        valido = true;
        return valido;
      }
    }

    return valido;
  }
}
