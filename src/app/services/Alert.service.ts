import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

constructor(private toast: ToastController) { }

  async toastAlert(mensagem: string, cor: string) {
    const toast = await this.toast.create({
      message: mensagem,
      color: cor,
      duration: 2000
    });

    toast.present();
  }
}
