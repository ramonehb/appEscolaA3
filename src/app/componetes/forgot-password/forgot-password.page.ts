import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
  }

  recuperarSenha(){
    this.alert.toastAlert('E-mail enviado', 'success');
  }
}
