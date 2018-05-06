import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProcedimentosProvider, ProcedimentosList} from '../../providers/procedimentos/procedimentos';

/**
 * Generated class for the ProcedimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-procedimentos',
  templateUrl: 'procedimentos.html',
})
export class ProcedimentosPage {
  procedimentos: ProcedimentosList[] = [];
  searchText: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private procedimentosProvider: ProcedimentosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcedimentosPage');
    this.getAllProcedimentos();
  }
  
  ionViewDidEnter() {
    this.getAllProcedimentos();
  }

  getAllProcedimentos() {
    this.procedimentosProvider.getAll()
      .then((result) => {
        this.procedimentos = result;
      });
  }
 
  addProcedimento() {
    this.navCtrl.push('EditProcedimentoPage');
  }
 
  editProcedimento(id: number) {
    this.navCtrl.push('EditProcedimentoPage', { id: id });
  }
 
  removeProcedimento(lista: ProcedimentosList) {
    this.procedimentosProvider.remove(lista.key)
      .then(() => {
        // Removendo do array de produtos
        var index = this.procedimentos.indexOf(lista);
        this.procedimentos.splice(index, 1);
        this.toast.create({ message: 'Procedimento removido.', duration: 2000, position: 'botton' }).present();
      })
  }
 
  filterProcedimentos(ev: any) {
    //this.getAllProcedimentos();
  }

}
