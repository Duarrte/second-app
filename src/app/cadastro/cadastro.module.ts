import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { CadastroComponentRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    FormsModule,
    IonicModule,  
    CommonModule,
    CadastroComponentRoutingModule
  ]
})
export class CadastroModule { }
