import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuarios: { id: number, nome: string, email: string, img: string}[] = [  
    { id: 1, nome: 'Humberto Ramone', email: 'humberto@hrsolution.com.br', img: '../../../../assets/img/humberto.jpg'}, 
    { id: 2, nome: 'Vanessa Carvalho', email: 'vanessa@yahoo.com.br', img: '../../../../assets/img/van.jpg'}, 
    { id: 3, nome: 'Laryssa Laysa', email: 'laryssa@gmail.com', img: '../../../../assets/img/lary.jpg'}, 
    { id: 4, nome: 'Samuel Carvalho', email: 'samuel@hotmail.com.br' , img: '../../../../assets/img/samuel.jpg'},
    { id: 5, nome: 'Marcela Matos', email: 'marcela.matos@uol.com.br', img: '../../../../assets/img/marcela.jpg'}
  ];

  constructor(private router: Router, private alertController: AlertController, private alert: AlertService) { }

  ngOnInit() {
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
      message: `Deseja excluir o aluno ?`,
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
            const index = this.usuarios.findIndex(a => a.id === id);
            if (index >= 0) {
              this.usuarios.splice(index, 1);
            }
            this.alert.toastAlert(`Usuário excluido com sucesso`, 'danger', 'top')
          }
        }
      ]
    });

    await alert.present();
  }
}
