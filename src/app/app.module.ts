import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProcedimentosPage } from '../pages/procedimentos/procedimentos';
import { RelatoriosPage } from '../pages/relatorios/relatorios';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { TussPage } from '../pages/tuss/tuss';

import { ProcedimentosProvider } from '../providers/procedimentos/procedimentos';
import { TussProvider } from '../providers/tuss/tuss';
import { ProfissionaisProvider } from '../providers/profissionais/profissionais';
import { EquipePage } from '../pages/equipe/equipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProcedimentosPage,
    TussPage,
    EquipePage,
    RelatoriosPage,
    AjudaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProcedimentosPage,
    TussPage,
    EquipePage,
    RelatoriosPage,
    AjudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProcedimentosProvider,
    TussProvider,
    ProfissionaisProvider  ]
})
export class AppModule {}
