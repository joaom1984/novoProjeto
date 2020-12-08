import { Component, Input, OnInit } from '@angular/core';

@Component({
    templateUrl: "avaliacao.component.html",
    selector: "app-avaliacao",
    styleUrls: ["avaliacao.component.css"] 
})

export class AvaliacaoComponent implements OnInit {

    @Input()
    public nota = 0;
    public icones = ["heart", "heart-half-outline", "heart-outline", "heart", "heart"];

    ngOnInit() {
        for(let i = 0; i <= 4; i++) {

            let minimo = i;
            let maximo = i + 1;
            let nomeIcone = null;

            if(this.nota <= minimo) {
                nomeIcone = "heart-outline";
            }

            if(this.nota > minimo && this.nota < maximo) {
                nomeIcone = "heart-half";
            }

            if(this.nota > maximo) {
                nomeIcone = "heart";
            }

            this.icones[i] = nomeIcone;
            }

    }

}