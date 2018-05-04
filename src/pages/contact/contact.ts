import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AboutPage} from '../about/about';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private raceStorage: Storage,private classStorage: Storage) {

  }
race1: String ="s";
class1: String;

ionViewWillEnter()
{
  this.raceStorage.get("race1").then((data)=>{
    this.race1 = data;
  })
  .catch((err)=>{console.log(err);
  })

  this.classStorage.get("class1").then((data)=>{
    this.class1 = data;
    
  })
  .catch((err)=>{console.log(err);
  })
  //
}


}


