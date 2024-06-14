import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';
  autenticado: boolean = false

  constructor(private afAuth: AngularFireAuth,
    private toastController: ToastController,) { }

  ngOnInit() { }

  async login() {
  }

  // async logout() {
  //   await this.afAuth.signOut();
  //   this.isAuthenticated = false;
  //   this.showToast('DESCONECTADOS COM SUCESSO');
  // }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
