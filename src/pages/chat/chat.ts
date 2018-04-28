import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content,MenuController } from 'ionic-angular';
import * as firebase from 'Firebase';
import {GlobalProvider} from '../../providers/global/global';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
//import {UserModel} from '../../models/user.model';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage extends ProtectedPage{
  
@ViewChild(Content) content: Content;
//private user_name = null;
data = { type:'', nickname:'', message:'' };
chats = [];
roomkey:string;
nickname:string;
offStatus:boolean = false;

  constructor(storage: Storage,public menu:MenuController,public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider) {

     super(navCtrl, navParams, storage);

  this.roomkey = this.navParams.get("key") as string; 
  this.data.type = 'message';
  this.data.nickname = this.global.getUsername();
  this.nickname = this.global.getUsername() as string;
 
  let joinData = firebase.database().ref('bsite-26dce/'+this.roomkey+'/chats').push();
  joinData.set({
    type:'join',
    user:this.nickname,
    message:this.nickname+' has joined this room.',
    sendDate:Date()
  });
  this.data.message = '';

  firebase.database().ref('bsite-26dce/'+this.roomkey+'/chats').on('value', resp => {
    this.chats = [];
    this.chats = snapshotToArray(resp);
    setTimeout(() => {
      if(this.offStatus === false) {
        this.content.scrollToBottom(300);
      }
    }, 1000);
  });

  }

  ionViewDidLoad() {
    this.menu.enable(true);
    //console.log('ionViewDidLoad ChatPage');
  }

  sendMessage() {
  let newData = firebase.database().ref('bsite-26dce/'+this.roomkey+'/chats').push();
  newData.set({
    type:this.data.type,
    user:this.data.nickname,
    message:this.data.message,
    sendDate:Date()
  });
  this.data.message = '';
}


  exitChat() {
  let exitData = firebase.database().ref('bsite-26dce/'+this.roomkey+'/chats').push();
  exitData.set({
    type:'exit',
    user:this.nickname,
    message:this.nickname+' has exited this room.',
    sendDate:Date()
  });

  this.offStatus = true;

  this.navCtrl.setRoot("ChatRoomPage", {
    nickname:this.nickname
  });
}


}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};