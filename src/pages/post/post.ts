import {OnInit, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticleProvider} from '../../providers/article/article';
import {CommonProvider} from "../../providers/common/common";
import {Validators, FormBuilder} from '@angular/forms';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage extends ProtectedPage implements OnInit{
  
 protected ArtData:any;
  
 constructor(public navCtrl: NavController, public navParams: NavParams,public ActicleP: ArticleProvider,public storage:Storage, public formBuilder:FormBuilder,private common: CommonProvider) {
   super(navCtrl, navParams, storage);  
 }

 ngOnInit(): any {      
    this.ArtData = this.formBuilder.group({
      'content': ['',Validators.required],    
    });
 }

onSubmit(artData) { 
    this.common.presentLoading();   
    this.ArtData = artData;
    this.ActicleP.add(this.ArtData.value)
      .then(() => { this.common.closeLoading(); this.navCtrl.push('HomePage'); })
      .catch((e) => console.log("add post error", e));
  }

}
