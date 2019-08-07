import { Injectable } from '@angular/core';
import {Property} from '../models/property';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
    // listings: Array<Listings>;
  // listing1 = new Listings('Apartment in Cape Town', 'Cape Town - CBD', 750, '../../assets/home1.jpg');
  // listing2 = new Listings('Newlands town house', 'Cape Town - Newlands', 300, '../../assets/home1.jpg');
  // listing3 = new Listings('2 Bedroom flat', 'Cape Town - Wynburg', 350, '../../assets/home1.jpg');
  private id: Number;
  private property: any;

  constructor(private http: HttpClient) { }
  setProperty(prop){
    console.log({"Prop:": prop});
    this.property=prop;
  }
  getProperty(){
    return this.property

  }
  getListItems(){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.get('http://localhost:5000/api/property', {headers})
      .subscribe(response =>{
        //localStorage.setItem('userid', response);
        console.log(response);
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });

}
  getPropertyID(propertyID):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      console.log("New run")
      this.http.post('http://localhost:5000/api/property/view',propertyID, {headers})
      .subscribe((response:any) =>{
        localStorage.setItem('propertyID', response.id);
        console.log({"help":response});
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }
}
