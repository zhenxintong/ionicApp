import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {DashboardPage} from "../pages/dashboard/dashboard";
import {FriendsPage} from "../pages/friends/friends";
import {MinePage} from "../pages/mine/mine";
import {MouthWordPage} from "../pages/mouth-word/mouth-word";
import {WealthPage} from "../pages/wealth/wealth";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DashboardPage,
    WealthPage,
    MouthWordPage,
    FriendsPage,
    MinePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DashboardPage,
    WealthPage,
    MouthWordPage,
    FriendsPage,
    MinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
