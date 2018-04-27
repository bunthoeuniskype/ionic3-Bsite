import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import * as firebase from 'firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
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
  
@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {

constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public navCtrl: NavController, public navParams: NavParams) {
  platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
    splashScreen.hide();
  });
  firebase.initializeApp(config);
}

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatRoomPage');
  }

}
