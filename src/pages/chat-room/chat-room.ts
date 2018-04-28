import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {GlobalProvider} from '../../providers/global/global';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
//import {UserModel} from '../../models/user.model';
/**
 * Generated class for the ChatRoomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmCoIW1SjNW9N6W1Kyltp8JEubFuZIJfQ",
    authDomain: "bsite-26dce.firebaseapp.com",
    databaseURL: "https://bsite-26dce.firebaseio.com",
    projectId: "bsite-26dce",
    storageBucket: "bsite-26dce.appspot.com",
    messagingSenderId: "939804960032"
  };
   firebase.initializeApp(config);
@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage extends ProtectedPage{
//private user_name = null;
rooms = [];
ref = firebase.database().ref('bsite-26dce/');

constructor(public menu:MenuController,platform: Platform,storage:Storage, statusBar: StatusBar, splashScreen: SplashScreen, public global: GlobalProvider, public navCtrl: NavController, public navParams: NavParams) {

  super(navCtrl, navParams, storage);

  platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
    splashScreen.hide();
  });  
 

  this.ref.on('value', resp => {
    this.rooms = [];
    this.rooms = snapshotToArray(resp);
  });

}

addRoom() {
  this.navCtrl.push("AddChatRoomPage");
}

  ionViewDidLoad() {
    this.menu.enable(true);
    //console.log('ionViewDidLoad ChatRoomPage');
  }

joinRoom(key) {
  this.navCtrl.setRoot("ChatPage", {
    key:key,
    nickname:this.global.getUsername()
   // nickname:this.navParams.get("nickname")
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

