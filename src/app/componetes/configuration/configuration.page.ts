import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(private render: Renderer2,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  toggleTheme(event: Event) {
    if (event instanceof CustomEvent) {
      this.render.setAttribute(document.body, 'color-theme',  event.detail.checked ? 'dark' : 'light')
    }
  }

}
