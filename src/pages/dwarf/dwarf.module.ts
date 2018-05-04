import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DwarfPage } from './dwarf';

@NgModule({
  declarations: [
    DwarfPage,
  ],
  imports: [
    IonicPageModule.forChild(DwarfPage),
  ],
})
export class DwarfPageModule {}
