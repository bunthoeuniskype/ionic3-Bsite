import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import * as firebase from 'Firebase';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the AddChatRoomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-chat-room',
  templateUrl: 'add-chat-room.html',
})
export class AddChatRoomPage extends ProtectedPage{

  data = { roomname:'' };
  ref = firebase.database().ref('bsite-26dce/');

  constructor(public navCtrl: NavController,storage:Storage, public navParams: NavParams,public menu:MenuController) {
     super(navCtrl, navParams, storage);
  }

  ionViewDidLoad() {
    this.menu.enable(true);
    //console.log('ionViewDidLoad AddChatRoomPage');
  }

  addRoom() {
  let newData = this.ref.push();
  newData.set({
    roomname:this.data.roomname
  });
  this.navCtrl.pop();
}

}
