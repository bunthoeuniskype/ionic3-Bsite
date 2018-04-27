import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
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
export class AddChatRoomPage {

  data = { roomname:'' };
  ref = firebase.database().ref('bsite-26dce/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChatRoomPage');
  }

  addRoom() {
  let newData = this.ref.push();
  newData.set({
    roomname:this.data.roomname
  });
  this.navCtrl.pop();
}

}
