import { CheckoutPage } from './../checkout/checkout';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MapPage } from './../map/map';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  phoneNumber: number = 33774449;

  /** Price Details Variables */
  title: string = "Price Details";
  NormalPrice: string = "80";
  NormalDownPayment: string = "20";
  WeekendPrice: string = "100";
  WeekendDownPayment: string = "30";
  icon: string = "ios-add-circle-outline";
  showDetails: boolean = false;

  showTimingDetails: boolean = false;
  TimingIcon: string = "ios-add-circle-outline";

  eventClicked: boolean = false; //Whatever you want to initialise it as
  BookNowClicked: boolean = false;

  show = 0;
  icons: Array<any>;
  imgs: Array<any>;
  selectedImg = 'https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png';
  startTime = new Date('2018-03-14');
  endTime  = new Date('2018-03-14');

  eventSource = [{
    title: 'test',
    startTime: this.startTime,
    endTime: this.endTime,
    allDay: false
  }];
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    return date < current;
};

  constructor(public navCtrl: NavController, public navParams: NavParams, private call: CallNumber) {
  
    this.imgs = [{img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"},
    {img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png"},
    {img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png"},
    {img:"https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png"},
    {img:"https://cdn.getyourguide.com/niwziy2l9cvz/560hVYQxdKMk8AWs4ISGk6/589264e903e0f5f08b63fcc88792e3e4/istanbul-maidens-tower-1112x630.jpg"},
    {img:"https://ionicframework.com/dist/preview-app/www/assets/img/advance-card-map-mario.png"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  TriggerCalendar(){
    this.BookNowClicked = true;
  }

  getImg(img){
    this.selectedImg=img;
  }

  onCurrentDateChanged(event){
    if(this.show == 1)
    {
      this.eventClicked = true;
    }
    else
    {
      this.show = 1;
      this.eventClicked = !this.eventClicked;
    }
   
    console.log('onCurrentDateChanged DetailsPage');
  }

  onEventSelected(event){
    console.log('onEventSelected DetailsPage');
  }

  onTimeSelected($event){

  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  /** Phone Number Calling Function, this is will takes the phoneNumber variable and call it using the native
   * dial-up application in the phone, it will only works in simulator or native devices.
   * I also changed the "tsconfig.json" file and replaced "target": "es5" to "target": "es6" in order to use "async"
   * for more information, you can refer to this video: https://www.youtube.com/watch?v=7kKcpgcSW60
   */
  async callNumber():Promise<any>{
    try {
      this.call.callNumber(String(this.phoneNumber), true);
    }
    catch(e){
      console.error(e);
    }
  }

  /** Navigation to Map Page */
  goToMapPage(){
    this.navCtrl.push(MapPage,{},{animate: true, direction: 'forward'});
  }

  /** Navigation to Checkout Page */
  goToCheckoutPage(){
    this.navCtrl.push(CheckoutPage,{},{animate: true, direction: 'forward'});
  }



toggleDetails() {
  if (this.showDetails) {
      this.showDetails = false;
      this.icon = 'ios-add-circle-outline';
  } else {
      this.showDetails = true;
      this.icon = 'ios-remove-circle-outline';
  }
}

toggleTimingDetails(){
  if (this.showTimingDetails) {
    this.showTimingDetails = false;
    this.TimingIcon = 'ios-add-circle-outline';
  } else {
      this.showTimingDetails = true;
      this.TimingIcon = 'ios-remove-circle-outline';
  }
}


}
