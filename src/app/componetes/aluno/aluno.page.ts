import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  cardList: { title: string, subtitle: string, content: string, img: string}[] = [  
    { title: 'Humberto Ramone', subtitle: 'Developer full-stack', content: 'Analise e desenvolvimento de sistemas', img: '../../../../assets/img/humberto.jpg'}, 
    { title: 'Amanda Medeiros', subtitle: 'Nutricionista', content: 'Nutrição', img: '../../../../assets/img/amanda.jpg'},
    { title: 'Samuel Carvalho', subtitle: 'Developer back-end' , content: 'Analise e desenvolvimento de sistemas', img: '../../../../assets/img/samuel.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
