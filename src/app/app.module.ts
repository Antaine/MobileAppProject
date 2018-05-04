import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import{InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DragonbornPage } from '../pages/dragonborn/dragonborn';
import { DwarfPage } from '../pages/dwarf/dwarf';
import { ElfPage } from '../pages/elf/elf';
import { GnomePage } from '../pages/gnome/gnome';
import { HalflingPage } from '../pages/halfling/halfling';
import { HalfOrcPage } from '../pages/half-orc/half-orc';
import { HalfElfPage } from '../pages/half-elf/half-elf';
import { HumanPage } from '../pages/human/human';
import { TieflingPage } from '../pages/tiefling/tiefling';
import { ResourcesPage } from '../pages/resources/resources';
import{IonicStorageModule} from '@ionic/storage';
import { OpenWeatherMapModule } from 'ionic-openweathermap';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DragonbornPage,
    DwarfPage,
    ElfPage,
    GnomePage,
    HalfElfPage,
    HalflingPage,
    HalfOrcPage,
    HumanPage,
    TieflingPage,
    ResourcesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    OpenWeatherMapModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DragonbornPage,
    DwarfPage,
    ElfPage,
    GnomePage,
    HalfElfPage,
    HalflingPage,
    HalfOrcPage,
    HumanPage,
    TieflingPage,
    ResourcesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
//IonicStorageModule.forRoot()
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
