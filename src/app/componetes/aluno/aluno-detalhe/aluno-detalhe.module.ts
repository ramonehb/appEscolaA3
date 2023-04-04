import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoDetalhePageRoutingModule } from './aluno-detalhe-routing.module';

import { AlunoDetalhePage } from './aluno-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoDetalhePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlunoDetalhePage]
})
export class ProfessorDetalhePageModule {}
