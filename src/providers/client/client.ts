import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {ClientModel} from '../../models/client.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../../app/config';
/*
  Generated class for the ClientProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ClientProvider {

  private cfg: any;

  constructor(
    private authHttp: AuthHttp) {

    this.cfg = AppConfig.cfg;
  }

  getAll() {
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.clients)
      .toPromise()
      .then(rs => {
        return rs.json();
      });
  }

  getOne(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.clients + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json().book;
      });
  }

  add(client: ClientModel) {
    return this.authHttp.post(this.cfg.apiUrl + this.cfg.clients, client)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(e => console.log("create book error", e));
  }

  update(client: ClientModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.clients + '/' + client.id, client)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("update book error", e));
  }

  remove(id: number) {
    return this.authHttp.delete(this.cfg.apiUrl + this.cfg.clients + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("delete book error", e));
  }

}
