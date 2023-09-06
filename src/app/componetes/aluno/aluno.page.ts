import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/Aluno';
import { AlertService } from 'src/app/services/alert.service';
import { IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  handlerMessage = '';
  alunos: Aluno[] = [];
  alunoService = new AlunoService();

  constructor(private router: Router, private alertController: AlertController, private alert: AlertService, private ionRouterOutlet: IonRouterOutlet, private changeDetectorRef: ChangeDetectorRef) {
    this.alunos = this.alunoService.obterAlunos();
   }

  ngOnInit() {
  this.alunos = this.alunoService.obterAlunos();
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
              this.alunoService.excluirAluno(id)
              location.reload();
            }
            this.alert.toastAlert(`Aluno excluido com sucesso`, 'danger', 'top')
          }
        }
      ]
    });

    await alert.present();
  }
}
