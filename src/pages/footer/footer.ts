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
  profileRoot = 'ProfilePage';
  tab4Root = 'BooksPage';
  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  
}
