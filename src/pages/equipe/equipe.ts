import { Component,  ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams, Searchbar } from 'ionic-angular';
import { ProfissionaisProvider } from '../../providers/profissionais/profissionais';

/**
 * Generated class for the EquipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-equipe',
  templateUrl: 'equipe.html',
})
export class EquipePage {
  private listaMembros: any;
  private items: any;
  private membrosSelected: any = [];
  private membrosOriginal: any = [];
  
  @ViewChild('membroSearchbar') searchbar:Searchbar;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private profissionaisProvider: ProfissionaisProvider) {
    
    this.ionViewDidLoad();  
    console.log(navParams);
    //lista para consulta
    this.listaMembros = this.profissionaisProvider.getAll();
    //lista selecionada pelo usuario
    if (navParams.get("equipe")){
      this.membrosOriginal = navParams.get("equipe");  
      this.membrosSelected = navParams.get("equipe");      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipePage');
  }

  dismiss() {
    this.viewCtrl.dismiss(this.membrosOriginal);
  }

  save() {
    this.viewCtrl.dismiss(this.membrosSelected);
  }  

  initializeItems() {
    this.items =  this.listaMembros;
  }

  
  private getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onInput(ev: any){
    return this.getItems(ev);
  }

  onCancel(){
    console.log("cancelar");    
  }

  addItem(item: any){
    this.membrosSelected.push(item);
    this.clearSearch();
  }

  removeItem(data_item: any){
    this.membrosSelected = this.membrosSelected.filter(item => item !== data_item);
  }

  toggleFavoriteItem(data_item: any){
    console.log("favoriteItem");
    console.log(data_item);
    let membro = this.membrosSelected.filter(item => item == data_item)[0];
    if(membro.favorito){
      membro.favorito = false;
    }else{
      membro.favorito = true;
    } 
    console.log(membro);
  }

  clearSearch(){
    this.items = [];
    this.searchbar.setValue('');
    this.searchbar.setFocus();
  }
}
