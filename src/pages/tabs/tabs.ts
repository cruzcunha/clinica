import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
import { ProcedimentosPage} from '../procedimentos/procedimentos';
import { RelatoriosPage } from '../relatorios/relatorios';
import { AjudaPage } from "../ajuda/ajuda";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tabProcedimentos = ProcedimentosPage;
  tabRelatorios = RelatoriosPage;
  tabAjuda = AjudaPage;

  constructor() {

  }
}
