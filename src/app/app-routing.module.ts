import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'recuperar', loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarPageModule) },
  { path: 'crear-usuario', loadChildren: () => import('./pages/crear-usuario/crear-usuario.module').then(m => m.CrearUsuarioPageModule) },
  { path: 'e404', loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule) },

  { path: '**', redirectTo: 'e404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true 
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}