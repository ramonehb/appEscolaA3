import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Aulas', url: '/folder/Aulas', icon: 'school' },
    { title: 'Calendario', url: '/folder/Calendario', icon: 'calendar' },
    { title: 'Alunos', url: '/folder/Alunos', icon: 'people' },
    { title: 'Disciplinas', url: '/folder/Disciplinas', icon: 'bookmarks' },
    { title: 'Cadastrar usuário', url: '/registration', icon: 'person-add' },
    { title: 'Sair', url: '/', icon: 'exit' }
  ];
  constructor() {}
}
