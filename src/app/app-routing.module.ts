import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlunoDetalhePage } from './componetes/aluno/aluno-detalhe/aluno-detalhe.page';
import { AuthGuard } from './helpers/authGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./componetes/folder/folder.module').then( m => m.FolderPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./componetes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./componetes/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./componetes/configuration/configuration.module').then( m => m.ConfigurationPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'aluno',
    loadChildren: () => import('./componetes/aluno/aluno.module').then( m => m.AlunoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'aluno-detalhe',
    loadChildren: () => import('./componetes/aluno/aluno-detalhe/aluno-detalhe.module').then( m => m.ProfessorDetalhePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'aluno-detalhe/:id',
    loadChildren: () => import('./componetes/aluno/aluno-detalhe/aluno-detalhe.module').then( m => m.ProfessorDetalhePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./componetes/usuario/usuario.module').then( m => m.UsuarioPageModule) , canActivate: [AuthGuard]
  },
  {
    path: 'usuario-detalhe',
    loadChildren: () => import('./componetes/usuario/usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'usuario-detalhe/:id',
    loadChildren: () => import('./componetes/usuario/usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./componetes/menu/menu.module').then( m => m.MenuPageModule), canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
