import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ProfileModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-modal',
  templateUrl: 'profile-modal.html',
})
export class ProfileModalPage {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.user = this.navParams.get('user');
    console.log(this.user);    
  }

  closeModal() {
    this.viewCtrl.dismiss();
   }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfileModalPage');
  // }

}
