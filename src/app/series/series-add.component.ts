import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-series-add",
    templateUrl: "series-add.component.html"
})

export class SeriesAddComponent implements OnInit {

    public serie ={}

    constructor(private seriesService: SeriesService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get("id");
        if(id !== null) {
            this.serie = this.seriesService.pegarSeriePorId(id);
            this.serie.id = id;
        }                                  
    }

    vaiFormulario() {
        this.seriesService.adicionarSerie(this.serie);
        this.router.navigate(['/']);
    }
}