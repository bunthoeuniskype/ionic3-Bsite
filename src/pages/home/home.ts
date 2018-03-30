import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
  posts:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {

    this.slideData = [{ image: "https://www.jssor.com/demos/img/gallery/1300x500/001.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/002.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/003.jpg" }];
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    }); 

  }


}
