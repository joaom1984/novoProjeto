import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero1: number;
  public numero2: number;

  public operacao: string;

  constructor(public alertController: AlertController) {}

  async vaiFormulario() {

    let total = 0;

    switch(this.operacao) {
      case "add" :
        total = this.numero1 + this.numero2;
        break;

      case "sub" :
        total = this.numero1 - this.numero2;
        break;  

      case "mul" :
        total = this.numero1 * this.numero2;
        break;   

      case "sub" :
        total = this.numero1 / this.numero2;
        break;   
      
      default:
        total = 0;
    }
                     
    const alert = await this.alertController.create({
        
      header: 'O resultado é de:',
      message: total,
      buttons: ['Vai']
    });

    await alert.present();

  }

}
