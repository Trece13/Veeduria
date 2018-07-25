import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesonasPage } from './pesonas';

@NgModule({
  declarations: [
    PesonasPage,
  ],
  imports: [
    IonicPageModule.forChild(PesonasPage),
  ],
})
export class PesonasPageModule {}
