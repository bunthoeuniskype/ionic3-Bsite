import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import *  as AppConfig from '../../app/config';
import {ArticleModel} from '../../models/article.model';
/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ArticleProvider {

  private cfg: any; 
    
  constructor(public http: Http,public authHttp: AuthHttp) {
    this.cfg = AppConfig.cfg;
  }

  getAll(page,limit) {
    // return this.http.get(this.cfg.apiUrl + this.cfg.articles+"?page="+page+"&limit="+limit)
    //   .toPromise()
    //   .then(rs => {
    //     return rs.json();
    //   }).catch(this.handleError);
     return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.get(this.cfg.apiUrl + this.cfg.articles+"?page="+page+"&limit="+limit, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });
    });      
  }

  getMore(page,limit) {
    return this.http.get(this.cfg.apiUrl + this.cfg.articles+"?page="+page+"&limit="+limit)
      .toPromise()
      .then(rs => {
        return rs.json();
      }).catch(this.handleError);    
  }

    // getAll(page,limit) : Observable<string[]> {
    //   return this.http.get(this.cfg.apiUrl + this.cfg.articles+"?page="+page+"&limit="+limit)
    //                   .map(this.extractData)
    //                   .catch(this.handleError);
    // }

    private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

 private extractData(res: Response) {
  let body = res.json();
  return body || { };
  }

  add(artcle: ArticleModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.cfg.articles, artcle)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("create book error", e));
  }

}
