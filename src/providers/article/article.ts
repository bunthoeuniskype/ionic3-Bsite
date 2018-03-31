import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../../app/config';

/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ArticleProvider {

  private cfg: any;
  
  constructor(public http: Http) {
    this.cfg = AppConfig.cfg;
  }

  getAll() {
    return this.http.get(this.cfg.apiUrl + this.cfg.articles)
      .toPromise()
      .then(rs => {
        return rs.json();
      });
  }

}
