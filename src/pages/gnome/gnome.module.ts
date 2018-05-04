import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GnomePage } from './gnome';

@NgModule({
  declarations: [
    GnomePage,
  ],
  imports: [
    IonicPageModule.forChild(GnomePage),
  ],
})
export class GnomePageModule {}
