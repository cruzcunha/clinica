import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { Procedimento } from '../../providers/procedimentos/procedimentos';
import { ProcedimentosProvider } from '../../providers/procedimentos/procedimentos';
import { TussPage } from '../tuss/tuss';
import { Tuss } from '../../providers/tuss/tuss';
//import { Profissional } from '../../providers/profissionais/profissionais';
//import { EquipePage } from '../equipe/equipe';
 
@IonicPage()
@Component({
  selector: 'page-edit-procedimento',
  templateUrl: 'edit-procedimento.html',
})
export class EditProcedimentoPage {
  model: Procedimento; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController , public modalCtrl: ModalController,
     private procProvider: ProcedimentosProvider) {
    
    this.model = new Procedimento();

    if (this.navParams.data.id) {
      this.procProvider.get(this.navParams.data.id)
        .then((result: any) => {
          this.model = result;
        })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProcedimentoPage');
  }
 
  save() {
    this.saveProcedimento()
      .then(() => {
        this.toast.create({ message: 'Procedimento salvo.', duration: 2000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o procedimento.', duration: 2000, position: 'botton' }).present();
      });
  }
 
  private saveProcedimento() {
    if (this.model.id) {
      return this.procProvider.update(this.model);
    } else {
      return this.procProvider.insert(this.model);
    }
  }

  removeItemTuss(data_item: Tuss){
    this.model.tussLista = this.model.tussLista.filter(item => item !== data_item);
    this.toast.create({ message: 'Item removido.', duration: 2000, position: 'botton' }).present();
  }

  presentTussModal() {
    let tussModal = this.modalCtrl.create(TussPage, { "tussLista": this.model.tussLista} );
    tussModal.onDidDismiss(data => {
      this.model.tussLista = data;
    });
    tussModal.present();
  }

 /* removeMembroEquipe(data_item: Profissional){
    this.model.equipe = this.model.equipe.filter(item => item !== data_item);
    this.toast.create({ message: 'Profissional removido.', duration: 2000, position: 'botton' }).present();
  }

  presentEquipeModal() {
    let equipeModal = this.modalCtrl.create(EquipePage, { "equipe": this.model.equipe} );
    equipeModal.onDidDismiss(data => {
      console.log(data);
      this.model.equipe = data;
    });
    equipeModal.present();
  }*/

}
