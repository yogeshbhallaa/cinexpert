import { Injectable } from '@angular/core';
import { paymentUrl } from '../Model/paymentUrl';

@Injectable({
  providedIn: 'root'
})
// Data Service
export class DataService {
  private IsSignup: boolean = true;
  public isDisplayname: string = "Login";
  private pUrl: paymentUrl;
  private userId: String;
  constructor() { }
  setUserId(id: String) {
    this.userId = id;
  }
  getUserId() {
    return this.userId;
  }
  setisDisplayname(value: string) {
    this.isDisplayname = value;
  }
  getisDisplayname() {
    return this.isDisplayname;
  }
  setIsSignup(value: boolean) {
    this.IsSignup = value;
  }
  getIsSignup() {
    return this.IsSignup;
  }
  setpUrl(pUrl: paymentUrl) {
    this.pUrl = pUrl;
  }
  getpUrl() {
    return this.pUrl;
  }

}
