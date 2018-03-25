import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {ClientProvider} from '../../providers/client/client';
import {ClientModel} from '../../models/client.model';

/**
 * Generated class for the SiteInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-site-info',
  templateUrl: 'site-info.html',
})
export class SiteInfoPage extends ProtectedPage{

  public datas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public clientService: ClientProvider) {
    
    super(navCtrl, navParams, storage);     
  }

    ionViewWillEnter() {
    this.clientService.getAll().then(res => this.datas = res.clients);
  }
  
  dataInfo(client: ClientModel) {
    this.navCtrl.push('SiteDetailPage', {client: client});
  }

  editInfo(client:ClientModel){
     this.navCtrl.push('SiteEditPage', {client: client}); 
  }

  deleteInfo(client: ClientModel){
    let index = this.datas.indexOf(client);
    // if(index > -1){
    //   this.datas.splice(index, 1);
    // }    
    this.clientService.remove(client.id)
      .then(res => (index > -1) ? this.datas.splice(index, 1) :  this.navCtrl.pop())
      .catch(e => console.log("delete client error", e)); 
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SiteInfoPage');
  // }

}
