import { Injectable,ViewChild  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController,AlertController,ToastController,App,MenuController,NavController  } from 'ionic-angular';
/*
  Generated class for the CommonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommonProvider {

 @ViewChild('myNav') navCtrl: NavController;

  public loader: any;
  constructor(public loadingCtrl: LoadingController,private toastCtrl: ToastController, private alertCtrl: AlertController,private appCtrl: App,  private menuCtrl: MenuController) {
    console.log('Hello Common Provider');
  }

  presentLoading(){
   this.loader = this.loadingCtrl.create({content: "Please wait ..."})
  this.loader.present();
  }

  closeLoading(){
  this.loader.dismiss();
  }

  presentToast(msg :string) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'top'
  });
  // toast.onDidDismiss(() => {
  //   console.log('Dismissed toast');
  // });
  toast.present();
}

presentAlert(msg :any) {
  let alert = this.alertCtrl.create({
    title: 'Message',
    subTitle: msg,
    buttons: ['Dismiss']
  });
  alert.present();
  }

  redirectToHome() {  
    this.navCtrl.push('FooterPage');
    this.menuCtrl.enable(true);
  }

}
