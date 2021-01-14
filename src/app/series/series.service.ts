import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private storage: Storage) { }

  salvarDadosNoNavegador() {
    this.storage.set('nome', 'Lisa');
  }

  pegarDadosNoNavegador() {
    this.storage.get('nome').then((vaLorDoElemento) => {
      console.log(vaLorDoElemento);
    })
  }

  private series = [];
 
  pegarTodasSeries() {
    this.series = [];
    this.storage.forEach((eLemento) => {
      this.series.push(JSON.parse(eLemento));
    });

    return this.series;
  }

  pegarSeriePorId(idSerie) {
    let serie = null; 
  
     for(let i=0; i< this.series.length; i++) {
      
      if(this.series[i].id == idSerie) {
        serie = this.series[i];
        break;
      }

    }

    return serie;
  }

  adicionarSerie(serie) {
    if(serie.id == null) {
    //adicionar 

    serie.id = uuidv4(); 
    this.storage.set(serie.id, JSON.stringify(serie));

  } else {
    this.atualizarSerie(serie);
  }
  }

  atualizarSerie(serie) {

  for(let i=0; i< this.series.length; i++) {
      
    if(this.series[i].id == serie.id) {
      this.series[i] = serie;
      break;
    }

  }
  }

  removerSeriePorId(idSerie){

    for(let i=0; i< this.series.length; i++) {
      
      if(this.series[i].id == idSerie) {
       
        this.series.splice(i, 1);
        break;
      }

    }
   
    console.log(this.series);
  }
}
