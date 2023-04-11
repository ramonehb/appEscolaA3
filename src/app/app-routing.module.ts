import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlunoDetalhePage } from './componetes/aluno/aluno-detalhe/aluno-detalhe.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./componetes/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./componetes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./componetes/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./componetes/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./componetes/aluno/aluno.module').then( m => m.AlunoPageModule)
  },
  {
    path: 'aluno-detalhe',
    loadChildren: () => import('./componetes/aluno/aluno-detalhe/aluno-detalhe.module').then( m => m.ProfessorDetalhePageModule)
  },
  {
    path: 'aluno-detalhe/:id',
    loadChildren: () => import('./componetes/aluno/aluno-detalhe/aluno-detalhe.module').then( m => m.ProfessorDetalhePageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./componetes/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'usuario-detalhe',
    loadChildren: () => import('./componetes/usuario/usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule)
  },
  {
    path: 'usuario-detalhe/:id',
    loadChildren: () => import('./componetes/usuario/usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
