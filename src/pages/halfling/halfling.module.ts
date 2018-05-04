import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalflingPage } from './halfling';

@NgModule({
  declarations: [
    HalflingPage,
  ],
  imports: [
    IonicPageModule.forChild(HalflingPage),
  ],
})
export class HalflingPageModule {}
