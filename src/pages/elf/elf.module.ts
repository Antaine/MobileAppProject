import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElfPage } from './elf';

@NgModule({
  declarations: [
    ElfPage,
  ],
  imports: [
    IonicPageModule.forChild(ElfPage),
  ],
})
export class ElfPageModule {}
