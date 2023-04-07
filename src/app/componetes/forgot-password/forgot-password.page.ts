import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formEsqueciSenha: FormGroup;
  mensagens = {
    email: [
      {tipo: 'required', mensagem: 'E-mail é obrigatório.'}
    ]};

  constructor(private alert: AlertService,  private formBuilder: FormBuilder) {
    this.formEsqueciSenha = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit() {
  }

  recuperarSenha(){
    this.alert.toastAlert('E-mail enviado', 'success');
  }

  get f(): any {
    return this.formEsqueciSenha.controls;
  }
}
