import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  slideOptions = {
    initialSlide: 0,
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(rota: string){
    this.router.navigate([`/${rota}`]);
  }
}
