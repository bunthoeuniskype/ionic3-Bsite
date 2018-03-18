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
  
  dataInfo(data: ClientModel) {
    console.log(data);
   // this.navCtrl.push('BookInfoPage', {book: book});
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SiteInfoPage');
  // }

}
