import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioDetalhePageRoutingModule } from './usuario-detalhe-routing.module';
import { UsuarioDetalhePage } from './usuario-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioDetalhePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioDetalhePage]
})
export class UsuarioDetalhePageModule {}
