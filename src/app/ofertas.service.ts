import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import { ENDPOINT } from './app.api';


@Injectable()
export class OfertasService {

    resposta: any;

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${ENDPOINT}/ofertas?destaque=true`)
         .toPromise()
         .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${ENDPOINT}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta);
    }

    public getOfertaById(id: number): Promise<Oferta> {
        return this.http.get(`${ENDPOINT}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Oferta) => {
            this.resposta = JSON.stringify(resposta);
            return resposta[0];
        });
    }

    public getComoUsarOfertaById(id: number): Promise<string> {
        return this.http.get(`${ENDPOINT}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            this.resposta = JSON.stringify(resposta);
            return resposta[0].descricao;
        });
    }

    public getOndeFicaOfertaById(id: number): Promise<string> {
        return this.http.get(`${ENDPOINT}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            this.resposta = JSON.stringify(resposta);
            return resposta[0].descricao;
        });
    }

}
