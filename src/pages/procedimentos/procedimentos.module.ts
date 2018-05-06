import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcedimentosPage } from './procedimentos';

@NgModule({
  declarations: [
    ProcedimentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcedimentosPage),
  ],
})
export class ProcedimentosPageModule {}
