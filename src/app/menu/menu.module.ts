import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    FormsModule,
    IonicModule,  
    CommonModule,
  ]
})
export class MenuModule { }
