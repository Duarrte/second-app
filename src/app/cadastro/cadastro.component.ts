import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent  implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth, 
    private toastController: ToastController) { }

  ngOnInit() {}

  cadastrar(email: string, senha: string) {
    this.afAuth.createUserWithEmailAndPassword(email, senha)
      .then(res => {
        this.router.navigate(['/characters']);
        this.showToast('Cadastro realizado');
      })
      .catch(erro => {
        this.showToast('Falha ao cadastrar');
      });
  }
  
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
