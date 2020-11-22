import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private nome : string;
  private email: string;
  private telefone: string;

  constructor() {}

  vaiFormulario() {
        console.log(this.nome);
        console.log(this.email);
        console.log(this.telefone);
  }

}
