import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController, ToastController } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {ClientModel} from '../../models/client.model';

/**
 * Generated class for the SiteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-site-detail',
  templateUrl: 'site-detail.html',
})
export class SiteDetailPage extends ProtectedPage{

  client  = ClientModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    super(navCtrl,navParams,storage);
    this.client = navParams.get('client');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SiteDetailPage');
  // }

}
