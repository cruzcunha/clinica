import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';

/*
  Generated class for the ProfissionalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfissionaisProvider {

  private lista: Profissional[] = [
    {"id":"1","nome":"Aline Aline", "favorito": false, "responsavel": false },
    {"id":"2","nome":"Alex Alex", "favorito": false, "responsavel": false },
    {"id":"3","nome":"Beto Beto", "favorito": false, "responsavel": false },
    {"id":"4","nome":"Humberto Humberto", "favorito": false, "responsavel": false },
    {"id":"5","nome":"Sergio Sergio", "favorito": false, "responsavel": false },
    {"id":"6","nome":"Carlos Carlos", "favorito": false, "responsavel": false },
  ];

  constructor(public storage: Storage) {
    console.log('Hello ProcedimentosProvider iniciado');
  }

//procedimentos (id integer primary key AUTOINCREMENT NOT NULL, descricao TEXT, nomePaciente TEXT, data DATE, local TEXT)
  public insert(objeto: Profissional) {
    let key = UUID.UUID();
    objeto.id = key;
    return this.save(key, objeto);
  }

  public update(objeto: Profissional) {
    return this.save(objeto.id, objeto);      
  }

  private save(key: string, objeto: Profissional) {
    return this.storage.set(key, objeto);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }

  public get(key: string){
    return this.storage.get(key);
  }
 
  /*public getAll() {
    console.log("provider getAll");
    let profissionais: ProfissionaisList[] = [];
 
    return this.storage.forEach((value: Profissional, key: string, iterationNumber: Number) => {
      let lista = new ProfissionaisList();
      lista.key = key;
      lista.profissional = value;
      profissionais.push(lista);
    })
      .then(() => {
        return Promise.resolve(profissionais);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }*/

  getAll(page: number = 1, size: number = 15): Profissional[] {
    return this.lista.slice((page - 1) * size, ((page - 1) * size) + size);
  }

}

export class Profissional {
  id: string;
  nome: string;
  responsavel: boolean;
  favorito: boolean;
}

export class ProfissionaisList {
  key: string;
  profissional: Profissional
}
