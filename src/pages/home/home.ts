import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slideData : any;

  UserFB :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public facebook:Facebook) {

    this.slideData = [{ image: "https://www.jssor.com/demos/img/gallery/1300x500/001.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/002.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/003.jpg" }];
    
  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
       console.log(profile);
       this.UserFB = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
