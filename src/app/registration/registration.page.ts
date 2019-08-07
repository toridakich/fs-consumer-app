import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public id: string;
  public firstName: string;
  public lastName: string;
  public cellPhone: string;
  public email: string;
  public password: string;
  public role: "User";

  public users: Array<any>;
  testId: string;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }
  submit(){
    const newUser = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      cellPhone: this.cellPhone,
      email: this.email,
      password: this.password,
      role: this.role
    }
    this.userService.addUser(newUser).then(res =>{
      localStorage.setItem('userId', newUser.id);
      console.log(res);
      this.navCtrl.navigateForward('explore', {
        queryParams:
        { user:res }
      });
    }).catch(err =>{
      this.presentAlert(err);
    });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to register',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
}
