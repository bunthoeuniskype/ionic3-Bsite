import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalProvider {

  public user_name:string;
  public lang:string;

  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
    this.user_name = localStorage.getItem('user_name');
    this.lang = localStorage.getItem('lang') || 'kh';
  }

  getUsername() {
    return this.user_name;
  }

  setUsername(name:string){
    this.user_name = name;
  }

  getLang(){
    return this.lang;
  }
  setLang(val:string){
    return this.lang = val;
  }

}
