import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDetailsPage(){
    //this.navCtrl.push(DetailsPage);
    this.navCtrl.push(DetailsPage,{},{animate: true, direction: 'forward'});
  }

}
