import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import {PropertyService} from '../services/property.service';
import {Property} from '../models/property';
import {User} from '../models/user';
import { UserService } from '../services/user.service';
import {PropertyInfoPage} from '../property-info/property-info.page';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  public properties: any;
  public property:{};


  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private propertyService: PropertyService
  ) { 
    // const user = this.userService.getLoggedInUser();
    // if (user) {
    //   this.presentToast((user.name + ' ' + user.lastName));
    // } else {
    //   this.navCtrl.navigateForward('home');
    // }
  }
  async presentToast(name) {
    const toast = await this.toastCtrl.create({
      message: 'Welcome ' + name + '!',
      duration: 2000
    });
    toast.present();
  }

  navToProfile(){
    this.navCtrl.navigateForward("profile");
  }
  navToSaved(){
    this.navCtrl.navigateForward("saved");
  }

  navToInbox(){
    this.navCtrl.navigateForward("inbox");
  }

  navToTrips(){
    this.navCtrl.navigateForward("trips");
  }
  ngOnInit() {
    this.propertyService.getListItems().then(res=>{
      console.log(res);
      this.properties=res;
    }).catch(err=>{
      console.log(err);
    })
  }
  viewProperty(property){
    localStorage.setItem("id", property.id);
    this.navCtrl.navigateForward('property-info', { 
      queryParams:
      {property: property.id}
  });
  }



}
