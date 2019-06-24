import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSub: Subscription;
  private meuObservableTesteSub: Subscription;

  public oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
     this.ofertasService.getOfertaById(this.route.snapshot.params.id)
     .then(( oferta: Oferta ) => {
        this.oferta = oferta;
     });

     /*
     this.route.params.subscribe(
       (parametro: any) => console.log(parametro),
       (erro: any) => console.log(erro),
       () => console.log('processamento foi classificado como concluido')
   );
      */

     const tempo = interval(1);
     this.tempoObservableSub = tempo.subscribe((resposta: number ) => console.log(resposta));


      // Observable (Observável)

     const meuObservableTeste = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream');
      observer.next('Segundo evento da stream');
      observer.complete();
     });

      // Observer (Observador)

     this.meuObservableTesteSub = meuObservableTeste.subscribe(
        (resultado: any) => console.log(resultado),
        (erro: string) => console.log(erro),
        () => console.log('Stream finalizada')
      );

    }

    ngOnDestroy(): void {
      this.meuObservableTesteSub.unsubscribe();
      this.tempoObservableSub.unsubscribe();
    }

}
