import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterLink, RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)    
  },
  {
    path: 'cadastro',
    redirectTo: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroModule)    
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'character-details',
    loadChildren: () => import('./character-details/character-details.module').then( m => m.CharacterDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'integrantes',
    loadChildren: () => import('./integrantes/integrantes.module').then( m => m.IntegrantesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterLink,    
    LoginModule, 
    CadastroModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
