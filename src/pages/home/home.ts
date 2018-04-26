import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ArticleProvider} from '../../providers/article/article';
import {CommonProvider} from "../../providers/common/common";

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

  //slideData : any;
  datas:any;
  errorMessage: string;
  //posts :any;
 // articles : any;
  page =1;
  limit =4;
  totalData = 0;
  totalPage = 0;

  public noRecords: boolean;
  loadData:any;
  articles:any;
  getData = {  
    "lastCreated": "",    
  };


 // private  apiUrl :string = "http://articlesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10"; //api url to retrieve 10 random articles

  constructor(public common: CommonProvider,public navCtrl: NavController, public navParams: NavParams,private http:Http, private socialSharing: SocialSharing,public articleService: ArticleProvider,) {

    //this.slideData = [{ image: "https://www.jssor.com/demos/img/gallery/1300x500/001.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/002.jpg" },{ image: "https://www.jssor.com/demos/img/gallery/1300x500/003.jpg" }];
    // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
    //     this.posts = data.data.children;
    // }); 
    this.getData.lastCreated = "";
    this.noRecords = false;
    this.getArticles(); 
    
  }
  async getArticles(){
          this.common.presentLoading();
          this.datas=await this.articleService.getAll(this.page,this.limit);     
          if(this.datas.data){
            this.noRecords = false;
            this.common.closeLoading();
            this.articles =  this.datas.data;
           // this.getData.lastCreated = this.datas.data[articles.length - 1].created;
          }
         
         }

compilemsg(index):string{
  // var msg = this.articles[index].content + "-" + this.articles[index].title ;
  // return msg.concat(" \n Sent from my Awesome App !");
  return 'abc';
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
    this.page = 1;
    this.articles=[];
   this.getArticles();     
   // calls the getarticles method
    setTimeout(() => {
      refresher.complete(); // stops the refresher 2 seconds after retreiving the Data
    }, 2000);
  } 


  doInfinite(infiniteScroll) :Promise<any>{
          this.page = this.page+1;
          
    //        this.loadData =  this.articleService.getMore(this.page,this.limit);//await  

    //       console.log(this.loadData);
    //       if(this.loadData.data){            
    //          const newData =  this.loadData.data;     
           
    //          for (let i = 0; i < newData.length; i++) {
    //               this.articles.push(newData[i]);
    //           }
    //       }
  
    //  setTimeout(() => {   
    //   infiniteScroll.complete(); // stops the refresher 2 seconds after retreiving the Data
    // }, 2000);


  return new Promise(resolve => {
   setTimeout(() => {
          this.articleService.getMore(this.page,this.limit).then(
          result => {
            this.datas = result;
            if (this.datas.data.length) {
                this.noRecords = false;
                const newData = this.datas.data;
                //this.getData.lastCreated = this.datas.data[newData.length - 1].created;        
        for (let i = 0; i < newData.length; i++) {
            this.articles.push(newData[i]);
        }
        
    } else {
        this.noRecords = true;         
    }
    },
    err => {
    //Connection failed message
    }
    );
    resolve();
      infiniteScroll.complete(); 
    }, 500);
    });

}

 openPage(page: string) {
    this.navCtrl.push(page);
  }

}
