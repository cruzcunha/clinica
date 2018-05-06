import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProcedimentoPage } from './edit-procedimento';

@NgModule({
  declarations: [
    EditProcedimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProcedimentoPage),
  ],
})
export class EditProcedimentoPageModule {}
