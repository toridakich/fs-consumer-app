import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { UserService } from '../services/user.service';
import { resolve } from 'q';
import { User } from '../models/user';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public user = new User();
  public email: string;
  public password: string;
  

  // We also should type of user to make life a whole lot easier(use listings model as a guide):
  public users: Array<any>;
   public id: string;


  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private userService: UserService,
    
    
  ) {
    // this.users = userService.users;
  }

  navToProfile(){
    this.navCtrl.navigateForward("explore");
  }
  login() {
    //  let authUser = new User(); 
    // -- I would do this (add user model)
    const authUser = {
      id: this.id,
      email: this.email,
      password: this.password
    }
    this.userService.userLogIn(authUser).then(user => {
      
      this.navCtrl.navigateForward('explore');
    }).catch(err => {
      console.log(err);
      this.presentAlert(err);
    });
  }
  
  register() {
    //alert("Feature coming soon!")
    // This should navigate to the register page:
    this.navCtrl.navigateForward("registration");

  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  // getUsers(){
  //   this.userService.getAllUsers().then().catch(err=>{

  //   })
  // }
  // getAllUsers(){
  //   return new Promise((resolve, reject) =>{
  //     this.httpClient.get("http://localhost:500/api/user")
      
  //   })
    
  // }
  

}
