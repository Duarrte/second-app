import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importe o módulo RouterModule
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule,
    MenuModule,    
    BrowserModule,
    RouterLink,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule, // Adicione o módulo RouterModule aos imports
    HttpClientModule, // Adicione o módulo HttpClientModule aos imports
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

