import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  //posts:any;
  quotes :any;
  private  apiUrl :string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10"; //api url to retrieve 10 random quotes

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http, private socialSharing: SocialSharing) {

    this.slideData = [{ image: "https://www.jssor.com/demos/img/gallery/1300x500/001.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/002.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/003.jpg" }];
    // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
    //     this.posts = data.data.children;
    // }); 
    this.getQuotes(); 
    
  }
  async getQuotes(){
          this.quotes = await this.http.get(this.apiUrl).map(res => res.json()).toPromise();;
         // console.log(this.quotes);
  }

compilemsg(index):string{
  var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
  return msg.concat(" \n Sent from my Awesome App !");
}

regularShare(index){
  var msg = this.compilemsg(index);
  this.socialSharing.share(msg, null, null, null);
}

whatsappShare(index){
  var msg  = this.compilemsg(index);
   this.socialSharing.shareViaWhatsApp(msg, null, null);
 }

twitterShare(index){
  var msg  = this.compilemsg(index);
  this.socialSharing.shareViaTwitter(msg, null, null);
}

   facebookShare(index){
   var msg  = this.compilemsg(index);
    this.socialSharing.shareViaFacebook(msg, null, null);
  }

   doRefresh(refresher) {
    this.getQuotes();  // calls the getQuotes method
    setTimeout(() => {
      refresher.complete(); // stops the refresher 2 seconds after retreiving the Data
    }, 2000);
  } 
}
