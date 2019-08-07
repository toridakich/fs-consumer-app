import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { calcBindingFlags } from '@angular/core/src/view/util';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // This should be type of user to make life a whole lot easier(use listings model as a guide):
  users: Array<any>;
  loggedInUser: any;
  private id: Number;
  private user: any;

  constructor(private httpClient: HttpClient) {

    // this.users = [
    //   {
    //     name: 'John',
    //     lastName: 'Doe',
    //     email: 'john@mail.com',
    //     password: '123'
    //   },
    //   {
    //     name: 'Samantha',
    //     lastName: 'Right',
    //     email: 'sam@mail.com',
    //     password: '123'
    //   },
    //   {
    //     name: 'Julia',
    //     lastName: 'Richards',
    //     email: 'julia@mail.com',
    //     password: '123'
    //   },
    // ];

  }
  setUser(user){
    console.log({"Prop:": user});
    this.user=user;
  }
  getProperty(){
    return this.user;

  }
  public userLogIn(Authuser: any) { // This should be type user

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      // Please note that this will call the API noce we have created it - But for now:
      // const user: any = this.users.filter(dbUser => {
      //   return dbUser.email === Authuser.email;
      this.httpClient.post(environment.BaseUrl + '/api/auth/userLogin', Authuser, { headers }).subscribe((response: any)=>{
        console.log(response.id);
        localStorage.setItem('userId', response.id);
        resolve(response);
        
      },
      (err: any) => {
        console.log(err);
        reject(err);
      }

      );

     

      // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
      // if (user.length) {
      //   if (Authuser.password === user[0].password) {
      //     this.setLoggedInUser(user[0]);
      //     resolve(user[0]);
      //   } else {
      //     reject(new Error('Incorrect password'));
      //   }
      // } else {
      //   reject(new Error("User doesn't exist"));
      // }

    });

  }
  public getUserByID(userId){
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      // Please note that this will call the API noce we have created it - But for now:
      // const user: any = this.users.filter(dbUser => {
      //   return dbUser.email === Authuser.email;
      this.httpClient.post(environment.BaseUrl + '/api/auth/getUserByID', userId, { headers }).subscribe((response: any)=>{
        console.log(response.id);
        
        resolve(response);
        
      },
      (err: any) => {
        console.log(err);
        reject(err);
      }

      );
    });
  }

  public addUser(newUser: any){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      // Please note that this will call the API noce we have created it - But for now:
      // const user: any = this.users.filter(dbUser => {
      //   return dbUser.email === Authuser.email;
      this.httpClient.post(environment.BaseUrl + '/api/auth/userRegister', newUser, { headers }).subscribe((response: any)=>{
        console.log(response.id);
        localStorage.setItem('userId', response.id);
        resolve(response);
        
      },
      (err: any) => {
        console.log(err);
        reject(err);
      }

      );
    });
  }

  setLoggedInUser(user: any) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInUser;
  }

}

