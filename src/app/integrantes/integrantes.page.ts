import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.page.html',
  styleUrls: ['./integrantes.page.scss'],
})
export class IntegrantesPage implements OnInit {
  integrantes = [
    { name: 'Ryan Xavier', image: 'assets/integrantes/1.jpg' },
    { name: 'Gabriel Pires', image: 'assets/integrantes/2.jpg' },
    { name: 'Carlos Magno', image: 'assets/integrantes/3.jpg' },
    // Adicione mais integrantes conforme necessário
  ];

  constructor() { }

  ngOnInit() {
  }
}
