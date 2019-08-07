import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {PropertyService} from '../services/property.service';
import {Property} from '../models/property';

import {BookingsService} from '../services/bookings.service';
import {Booking} from '../models/booking';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
// import { runInThisContext } from 'vm';


@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.page.html',
  styleUrls: ['./property-info.page.scss'],
})
export class PropertyInfoPage  {
  id: any;
  property: Property= new Property();
  dateFrom: string;
  dateTo: string;
  booking: Booking = new Booking();
  user: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private listingService: PropertyService, private bookingService: BookingsService) {
    // this.listingService.getPropertyID(this.id).then(res=>{
    //   console.log("test: ")
    //   console.log(res);
    //   this.property=res;
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    this.id= {'id':localStorage.getItem('id')};

  }

  ionViewWillEnter() {
    this.listingService.getPropertyID(this.id).then(res=>{
      console.log("test: ")
      console.log(res);
      this.property=res;

      }).catch(err=>{
        console.log(err);
      })


  }

  back(){
    this.navCtrl.navigateForward('explore');
  }
  createBooking(){
    // this.user=localStorage.getItem('userid');
    
    this.booking={
      
      dateFrom: this.dateFrom.slice(0, 10),
      dateTo: this.dateTo.slice(0, 10),
      userId: localStorage.getItem('userId'),
      propertyId: this.property.id,
      status: "new"
    }


    this.bookingService.createBooking(this.booking).then(res =>{
      // this.presentAlert("Booking successful!");
    }).catch(err => {
      this.presentAlert(err);
    });  
  }
  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();


}
}
