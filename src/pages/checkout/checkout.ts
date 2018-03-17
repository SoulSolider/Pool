import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReservationDetailsPage } from './../reservation-details/reservation-details';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  slides: any = [{img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"},
  {img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png"},
  {img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png"},
  {img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  goToReservationDetailsPage(){
    this.navCtrl.push(ReservationDetailsPage,{},{animate: true, direction: 'forward'});
  }

}
