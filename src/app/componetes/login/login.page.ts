import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/Auth.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
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
              private alertController: AlertController, 
              private toast: ToastController, 
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
      this.router.navigate(['/folder/Aulas']);
      this.toastAlert(`Bem vindo ${this.formLogin.get('login')?.value}`, 'success')
    } else {
      this.toastAlert('Erro login/senha inválido', 'danger')
    }
  }

  async toastAlert(mensagem: string, cor: string) {
    const toast = await this.toast.create({
      message: mensagem,
      color: cor,
      duration: 2000
    });

    toast.present();
  }

  get f(): any {
    return this.formLogin.controls;
  }

  public formValidator(campo: FormControl | AbstractControl): any {
    return { 'is-invalid': campo.errors && campo.touched};
  }
}
/*const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Usuário/Senha inválido',
        buttons: ['OK'],
      });

      await alert.present();
      */
