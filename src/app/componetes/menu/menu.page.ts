import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectAlunos(){
    this.router.navigate(['/aluno']);
  }

  redirectUsuarios(){
    this.router.navigate(['/usuario']);
  }

  redirectConfig(){
    this.router.navigate(['/configuration']);
  }

}
