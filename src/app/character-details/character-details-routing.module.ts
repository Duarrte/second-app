import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailsPage } from './character-details.page';
import { AuthGuard } from '../services/user/auth.guard';

const routes: Routes = [
  {
    path: ':id', // Adicione ':id' para indicar que este é um parâmetro na URL
    component: CharacterDetailsPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDetailsPageRoutingModule {}

