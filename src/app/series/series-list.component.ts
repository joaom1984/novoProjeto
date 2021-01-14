import { Component, OnInit } from '@angular/core';
import { SeriesService} from './series.service';

@Component({
    selector: 'app-series-list',
    templateUrl: 'series-list.component.html',
})
export class SeriesListComponent {

    public series;

    constructor(private seriesService: SeriesService) {}

    ionViewWillEnter() {
      this.series = this.seriesService.pegarTodasSeries();
    }

    removerSerie(id){
      this.seriesService.removerSeriePorId(id);
    }

    salvarNavegador(){
      this.seriesService.salvarDadosNoNavegador();
    }  

    pegarNavegador(){
      this.seriesService.pegarDadosNoNavegador();
    }  
}