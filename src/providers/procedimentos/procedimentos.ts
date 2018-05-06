import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';
import { Tuss } from '../tuss/tuss';
import { Profissional } from '../profissionais/profissionais';

@Injectable()
export class ProcedimentosProvider {

  constructor(public storage: Storage) {
    console.log('Hello ProcedimentosProvider iniciado');
  }

//procedimentos (id integer primary key AUTOINCREMENT NOT NULL, descricao TEXT, nomePaciente TEXT, data DATE, local TEXT)
  public insert(proc: Procedimento) {
    let key = UUID.UUID();
    proc.id = key;
    return this.save(key, proc);
  }

  public update(proc: Procedimento) {
    return this.save(proc.id, proc);      
  }

  private save(key: string, proc: Procedimento) {
    return this.storage.set(key, proc);
  }
 
  public remove(key: string) {
    return this.storage.remove(key);
  }

  public get(key: string){
    return this.storage.get(key);
  }
 
  public getAll() {
    let procedimentos: ProcedimentosList[] = [];
 
    return this.storage.forEach((value: Procedimento, key: string, iterationNumber: Number) => {
      let lista = new ProcedimentosList();
      lista.key = key;
      lista.procedimento = value;
      procedimentos.push(lista);
    })
      .then(() => {
        return Promise.resolve(procedimentos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  public find(descricao: string) {
    console.log("find");
    let procedimentos: ProcedimentosList[] = [];
 
    return this.storage.forEach((value: Procedimento, key: string, iterationNumber: Number) => {
      let lista = new ProcedimentosList();
      lista.key = key;
      lista.procedimento = value;
      procedimentos.push(lista);
    })
      .then(() => {
        return Promise.resolve(procedimentos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}


export class Procedimento {
  id: string;
  data: Date;
  local: string;
  nomePaciente: string;
  tussLista: Tuss[];
  descricao: string;
  tipo: string;
  plano: string;
  funcao: string;
  recebido: boolean;
  //medicoPrincipal: boolean;
  //equipe: Profissional[];
  
}

export class ProcedimentosList {
  key: string;
  procedimento: Procedimento
}



