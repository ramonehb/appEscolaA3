import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(private alert: AlertService) { }

  mostrarSenha: boolean = false;
  mostrarSenhaConfiirma: boolean = false;

  ngOnInit() {
  }

  cadastrarUsuario(){
    this.alert.toastAlert('Usuário cadastrado com sucesso', 'success');
  }

  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
  toggleMostrarSenhaConfirma() {
    this.mostrarSenhaConfiirma = !this.mostrarSenhaConfiirma;
  }
}
