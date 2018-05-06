import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';

//import { UUID } from 'angular2-uuid';
/*
  Generated class for the TussProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TussProvider {

  private listaTuss: Tuss[] = [
    {"id":"1","codigo":"1","descricao":"cirurgia bariatrica", "favorito": false },
    {"id":"2","codigo":"2","descricao":"cirurgia oftalmo", "favorito": false },
    {"id":"3","codigo":"3","descricao":"cirurgia coracao", "favorito": false }
  ];

  constructor(public storage: Storage) {
    console.log('Hello TussProvider iniciado');
    
    console.log(this.listaTuss);
  }

  getAll(page: number = 1, size: number = 15): Tuss[] {
    return this.listaTuss.slice((page - 1) * size, ((page - 1) * size) + size);
  }

  getAllAsync(page: number = 1, size: number = 15): Observable<Tuss[]> {
    return new Observable<Tuss[]>(observer => {
        observer.next(this.getAll(page, size));
        observer.complete()
    }).pipe(delay(2000));
  }
  

  /*public insert(objeto: Tuss) {
    let key = UUID.UUID();
    objeto.id = key;
    return this.save(key, objeto);
  }

  public update(objeto: Tuss) {
    return this.save(objeto.id, objeto);      
  }

  private save(key: string, objeto: Tuss) {
    return this.storage.set(key, objeto);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }

  public get(key: string){
    return this.storage.get(key);
  }
 
  public getAll() {
    let listaTuss: TussList[] = [];
 
    return this.storage.forEach((value: Tuss, key: string, iterationNumber: Number) => {
      let lista = new TussList();
      lista.key = key;
      lista.tuss = value;
      listaTuss.push(lista);
    })
      .then(() => {
        return Promise.resolve(listaTuss);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }*/
}

export class Tuss {
  id: string;
  codigo: string;
  descricao: string;
  favorito: boolean;
}

export class TussList {
  key: string;
  tuss: Tuss;
}
