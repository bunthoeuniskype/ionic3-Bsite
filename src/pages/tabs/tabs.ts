import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
import { ProfilePage } from '../profile-page/profile-page';
import { BooksPage } from '../books-page/books-page';
import { SiteInfoPage } from '../site-info/site-info';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  tab1Root: any = ProfilePage;
  tab2Root: any = BooksPage;
  tab3Root: any = SiteInfoPage;
 

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
  // }

}
