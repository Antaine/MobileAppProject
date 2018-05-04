import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalfElfPage } from './half-elf';

@NgModule({
  declarations: [
    HalfElfPage,
  ],
  imports: [
    IonicPageModule.forChild(HalfElfPage),
  ],
})
export class HalfElfPageModule {}
