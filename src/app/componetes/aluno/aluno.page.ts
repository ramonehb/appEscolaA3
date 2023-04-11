import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/Alert.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  handlerMessage = '';
  alunos: { id: number, nome: string, subtitle: string, curso: string, img: string}[] = [  
    { id: 1, nome: 'Andre Matos', subtitle: 'Developer full-stack', curso: 'Analise e desenvolvimento de sistemas', img: '../../../../assets/img/andre.jpg'}, 
    { id: 2, nome: 'Amanda Medeiros', subtitle: 'Nutricionista', curso: 'Nutrição', img: '../../../../assets/img/amanda.jpg'},
    { id: 3, nome: 'Roni Perreira', subtitle: 'Developer back-end' , curso: 'Analise e desenvolvimento de sistemas', img: '../../../../assets/img/roni.jpg'},
    { id: 3, nome: 'João da Silva', subtitle: 'Developer back-end' , curso: 'Ciencias da computacao', img: '../../../../assets/img/joao.jpg'},
    { id: 3, nome: 'Patricia Borges', subtitle: 'Administradora' , curso: 'Administração', img: '../../../../assets/img/patricia.jpg'},
    { id: 3, nome: 'Felipe Matos', subtitle: 'Developer mobile' , curso: 'Analise e desenvolvimento de sistemas', img: '../../../../assets/img/felipe.jpg'}
  ];

  constructor(private router: Router, private alertController: AlertController, private alert: AlertService) { }

  ngOnInit() {
  }

  public detalheAluno(id: number): void {
     this.router.navigate([`/aluno-detalhe/${id}`]);
  }

  public redirect() {
    this.router.navigate(['/aluno-detalhe']);
  }

  async excluirAluno(event: MouseEvent, id: number, nome: string){
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
            const index = this.alunos.findIndex(a => a.id === id);
            if (index >= 0) {
              this.alunos.splice(index, 1);
            }
            this.alert.toastAlert(`Aluno excluido com sucesso`, 'danger', 'top')
          }
        }
      ]
    });

    await alert.present();
  }
}
