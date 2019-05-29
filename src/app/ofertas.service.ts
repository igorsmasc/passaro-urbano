import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import { ENDPOINT } from './app.api';


@Injectable()
export class OfertasService {

    resposta: any;

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${ENDPOINT}?destaque=true`)
         .toPromise()
         .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${ENDPOINT}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta);
    }

    public getOfertaById(id: number): Promise<Oferta> {
        return this.http.get(`${ENDPOINT}?id=${id}`)
        .toPromise()
        .then((resposta: Oferta) => {
            this.resposta = JSON.stringify(resposta);
            return resposta[0];
        });
    }

}
