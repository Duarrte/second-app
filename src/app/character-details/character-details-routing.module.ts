import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailsPage } from './character-details.page';

const routes: Routes = [
  {
    path: ':id', // Adicione ':id' para indicar que este é um parâmetro na URL
    component: CharacterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDetailsPageRoutingModule {}

