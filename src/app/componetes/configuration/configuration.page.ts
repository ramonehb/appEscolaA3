import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(private render: Renderer2) { }
  
  toggleValue: boolean = false;

  ngOnInit() {
    var theme = sessionStorage.getItem('color-theme');
     this.setToggleValue(theme === null || theme === 'light' ? false : true)
  }

  toggleTheme(event: Event) {
    if (event instanceof CustomEvent) {
      this.render.setAttribute(document.body, 'color-theme',  event.detail.checked ? 'dark' : 'light');
      sessionStorage.setItem('color-theme', event.detail.checked ? 'dark' : 'light');
    }
  }

  setToggleValue(newValue: boolean) {
    this.toggleValue = newValue;
  }
}
