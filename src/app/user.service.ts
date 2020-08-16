import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLogged:any;
  constructor(private httpClient : HttpClient) {
    this.isUserLogged = false;
   }

  setUserLoggedIn():void{
    this.isUserLogged = true;
  }

  setUserLoggedOut():void{
    this.isUserLogged = false;
  }

  getUserLogged(): any{
    return this.isUserLogged;
  }

  getUserById(loginId : any){
    return this.httpClient.get('RESTAPI/webapi/myresource/getUserById/'+ loginId);
  }

  registerUser(user: any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerUser', user);
  }

  getTATA():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getTATA/');
  }

  getReliance():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getReliance/');
  }

  getEichermot():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getEichermot/');
  }

  getCipla():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getCipla/');
  }

  getAshokLeyland():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAshokLeyland/');
  }

  openNSE():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/openNSE/');
  }

  openBSE():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/openBSE/');
  }
}
