import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar = '';

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService
      ) { }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaById(this.route.parent.snapshot.params.id)
    .then((resposta: string) => {
      this.comoUsar = resposta;
    } );
  }
}
