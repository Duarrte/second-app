import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

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
    private toastController: ToastController,
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() { }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });

    await loading.present();
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.email, this.senha);
      await loading.dismiss();
      this.autenticado = true;
      this.router.navigate(['/characters']);
      this.showToast('Login realizado');

    } catch (error) {
      await loading.dismiss();
      this.showToast('Falha ao logar');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
