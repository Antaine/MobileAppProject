import { Component } from '@angular/core';
import { NavController, RadioButton } from 'ionic-angular';
import{Storage} from '@ionic/storage';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private raceStorage: Storage,private classStorage: Storage) {

  }

  races1 : string;
  Classes1 :string; 

  ionViewWillEnter()
{
  this.raceStorage.get("race1").then((data)=>{
    this.races1 = data;
  })
  .catch((err)=>{console.log(err);
  })

  this.classStorage.get("class1").then((data)=>{
    this.Classes1 = data;
  })
  .catch((err)=>{console.log(err);
  })
  //
}

outputStorage1()
{
  console.log(this.races1);
  this.raceStorage.set("race1",this.races1);
 // this.navCtrl.push(ContactPage);

  console.log(this.Classes1);
  this.classStorage.set("class1",this.Classes1);
  this.navCtrl.push(ContactPage);
}

}
