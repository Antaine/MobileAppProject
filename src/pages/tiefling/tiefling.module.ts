import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TieflingPage } from './tiefling';

@NgModule({
  declarations: [
    TieflingPage,
  ],
  imports: [
    IonicPageModule.forChild(TieflingPage),
  ],
})
export class TieflingPageModule {}
