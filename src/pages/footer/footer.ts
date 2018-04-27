import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';

/**
 * Generated class for the FooterPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html'
})
@IonicPage()
export class FooterPage {

  homeRoot = 'HomePage';
  siteRoot = 'SiteInfoPage';
  ChatRoot = 'ChatRoomPage';
  profileRoot = 'ProfilePage';
  tab4Root = 'BooksPage';
  tab5Root = 'MapPage';
  tab6Root = 'NotificationsPage';
  tab7Root = 'PostPage';
  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  
}
