import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/menu', icon: 'home' },
    { title: 'Alunos', url: '/aluno', icon: 'people' },
    { title: 'Usuários', url: '/usuario', icon: 'person-add' },
    { title: 'Configurações', url: '/configuration', icon: 'cog' },
    { title: 'Sair', url: '/', icon: 'exit' }
  ];
  constructor(private router: Router) {}

  redirectMenu(){
    this.router.navigate(['/menu']);
  }
}
