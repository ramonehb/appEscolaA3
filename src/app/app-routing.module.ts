import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'clientes',
    loadChildren: () => import('./componetes/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./componetes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./componetes/registration/registration.module').then( m => m.RegistrationPageModule)
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
    path: 'change-password',
    loadChildren: () => import('./componetes/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'aluno-detalhe',
    loadChildren: () => import('./componetes/aluno/aluno-detalhe/aluno-detalhe.module').then( m => m.ProfessorDetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
