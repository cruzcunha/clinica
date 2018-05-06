import { Component, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams, Searchbar } from 'ionic-angular';
import { TussProvider } from '../../providers/tuss/tuss';

@IonicPage()
@Component({
  selector: 'page-tuss',
  templateUrl: 'tuss.html',
})
export class TussPage {

  private listaTuss: any;
  private items: any;
  private tussSelected: any = [];
  private tussOriginal: any = [];
  
  @ViewChild('tussSearchbar') searchbar:Searchbar;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private tussProvider: TussProvider) {
    
    this.ionViewDidLoad();  
    console.log(navParams);
    //lista para consulta
    this.listaTuss = this.tussProvider.getAll();
    //lista selecionada pelo usuario
    if (navParams.get("tussLista")){
      this.tussOriginal = navParams.get("tussLista");  
      this.tussSelected = navParams.get("tussLista");      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TussPage');
  }

  dismiss() {
    this.viewCtrl.dismiss(this.tussOriginal);
  }

  save() {
    this.viewCtrl.dismiss(this.tussSelected);
  }  

  initializeItems() {
    this.items =  this.listaTuss;
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
    this.tussSelected.push(item);
    this.clearSearch();
  }

  removeItem(data_item: any){
    this.tussSelected = this.tussSelected.filter(item => item !== data_item);
  }

  toggleFavoriteItem(data_item: any){
    console.log("favoriteItem");
    console.log(data_item);
    let tuss = this.tussSelected.filter(item => item == data_item)[0];
    if(tuss.favorito){
      tuss.favorito = false;
    }else{
      tuss.favorito = true;
    } 
    console.log(tuss);
  }

  clearSearch(){
    this.items = [];
    this.searchbar.setValue('');
    this.searchbar.setFocus();
  }
}
