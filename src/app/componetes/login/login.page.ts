import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: string = "";
  senha: string  = "";

  constructor(private auth: AuthService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async validaLogin() {
    if (this.auth.validateLogin(this.login, this.senha)) {
      this.router.navigate(['/folder/Aulas']);
    } else {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Usuário/Senha inválido',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

}
