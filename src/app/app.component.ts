import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Calendario', url: '/folder/Calendario', icon: 'calendar' },
    { title: 'Alunos', url: '/aluno', icon: 'people' },
    { title: 'Usuários', url: '/usuario', icon: 'person-add' },
    { title: 'Configurações', url: '/configuration', icon: 'cog' },
    { title: 'Sair', url: '/', icon: 'exit' }
  ];
  constructor() {}
}
