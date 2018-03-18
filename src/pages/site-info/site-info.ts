import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UserModel} from '../../models/user.model';

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

  public user: UserModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    
    super(navCtrl, navParams, storage);
    
    this.storage.get('user').then(user => {
      this.user = user;
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SiteInfoPage');
  // }

}
