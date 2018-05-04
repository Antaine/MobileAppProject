import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
import { DragonbornPage } from './../dragonborn/dragonborn';
import { DwarfPage } from './../dwarf/dwarf';
import { ElfPage } from './../elf/elf';
import { GnomePage } from './../gnome/gnome';
import { HalfElfPage } from './../half-elf/half-elf';
import { HalfOrcPage } from './../half-orc/half-orc';
import { HalflingPage } from './../halfling/halfling';
import { HumanPage } from './../human/human';
import { TieflingPage } from './../tiefling/tiefling';
import { PlatformConfig, Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  options : InAppBrowserOptions ={
    location : 'yes',//or no
    hidden : 'no',//or
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no',//android only
    closebuttoncaption : 'no', //Ios only
    disallowoverscroll : 'no', //IOS only
    toolbar : 'yes', //IOS only
    enableViewportScale : 'no',//IOS only
    presentationstyle : 'pagesheet',//Ios only
    fullscreen : 'yes',//Windows only
  };

  constructor(public navCtrl: NavController,private theInAppBrowser: InAppBrowser) {

  }

  public openWithSystemBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
  }

  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }

  public openWithCordovaBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }

    openDragonborn()
    {
      this.navCtrl.push(DragonbornPage);
    }
    
    openDwarf()
    {
      this.navCtrl.push(DwarfPage);
    }

    openElf()
    {
      this.navCtrl.push(ElfPage);
    }

    openGnome()
    {
      this.navCtrl.push(GnomePage);
    }

    openHalfElf()
    {
      this.navCtrl.push(HalfElfPage);
    }

    openHalfOrc()
    {
      this.navCtrl.push(HalfOrcPage);
    }

    openHalfling()
    {
      this.navCtrl.push(HalflingPage);
    }

    openHuman()
    {
      this.navCtrl.push(HumanPage);
    }

    openTiefling()
    {
      this.navCtrl.push(TieflingPage);
    }

   
    }
    

