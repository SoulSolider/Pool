import { ChangePasswordPage } from './../pages/change-password/change-password';
import { ChangeEmailPage } from './../pages/change-email/change-email';
import { AccountInfoPage } from './../pages/account-info/account-info';
import { SettingsPage } from './../pages/settings/settings';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TooltipsModule } from 'ionic-tooltips';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallNumber } from '@ionic-native/call-number';
import { AgmCoreModule } from '@agm/core';
import { SocialSharing } from '@ionic-native/social-sharing';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { MapPage } from './../pages/map/map';
import { CheckoutPage } from './../pages/checkout/checkout';
import { ReservationDetailsPage } from './../pages/reservation-details/reservation-details';
import { ReservationsListPage } from './../pages/reservations-list/reservations-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    MapPage,
    CheckoutPage,
    ReservationDetailsPage,
    ReservationsListPage,
    SettingsPage,
    AccountInfoPage,
    ChangeEmailPage,
    ChangePasswordPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    TooltipsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUFisWUQAyuy8FYcBQFMOeTHgiXIZcqic'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    MapPage,
    CheckoutPage,
    ReservationDetailsPage,
    ReservationsListPage,
    SettingsPage,
    AccountInfoPage,
    ChangeEmailPage,
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    LaunchNavigator,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
