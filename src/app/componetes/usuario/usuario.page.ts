import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  handlerMessage = '';
  usuario: Usuario[] = [];
  usuarioService = new UsuarioService();


  constructor(private router: Router, private alertController: AlertController, private alert: AlertService) { 
  this.usuario = this.usuarioService.obterUsuario();
  }

  ngOnInit() {
  this.usuario = this.usuarioService.obterUsuario();
  }

  public redirect() {
    this.router.navigate(['/usuario-detalhe']);
  }

  public detalheUsuario(id: number): void {
    this.router.navigate([`/usuario-detalhe/${id}`]);
  }

  async excluirUsuario(event: MouseEvent, id: number, nome: string){
    event.stopPropagation();
    const alert = await this.alertController.create({
      header: `${nome}`,
      message: `Deseja excluir o usuario ?`,
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Excluir',
          cssClass: 'alert-button',
          handler: () => {
            const index = this.usuario.findIndex(a => a.id === id);
            if (index >= 0) {
              this.usuarioService.excluirUsuario(id)
              location.reload();
            }
            this.alert.toastAlert(`Usuario excluido com sucesso`, 'danger', 'top')
          }
        }
      ]
    });

    await alert.present();
  }
}
