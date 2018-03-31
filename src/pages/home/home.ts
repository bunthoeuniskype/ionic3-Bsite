import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ArticleProvider} from '../../providers/article/article';
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
  articles :any;
 // private  apiUrl :string = "http://articlesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10"; //api url to retrieve 10 random articles

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http, private socialSharing: SocialSharing,public articleService: ArticleProvider,) {

    this.slideData = [{ image: "https://www.jssor.com/demos/img/gallery/1300x500/001.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/002.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/003.jpg" }];
    // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
    //     this.posts = data.data.children;
    // }); 
    this.getArticles(); 
    
  }
  async getArticles(){
          let datas = await this.articleService.getAll();//await
          this.articles = datas.data;
         }

compilemsg(index):string{
  var msg = this.articles[index].content + "-" + this.articles[index].title ;
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
    this.getArticles();  // calls the getarticles method
    setTimeout(() => {
      refresher.complete(); // stops the refresher 2 seconds after retreiving the Data
    }, 2000);
  } 
}
