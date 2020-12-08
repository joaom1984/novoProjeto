import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from './series.service';

@Component({
    selector: "app-series-info",
    templateUrl: "series-info.component.html"
})

export class SeriesInfoComponent implements OnInit {
    
    public serie;
    
    constructor(private activatedRoute: ActivatedRoute, private seriesService) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get("id");
        this.serie = this.seriesService.pegarSeriePorId(id);
        
    }

}