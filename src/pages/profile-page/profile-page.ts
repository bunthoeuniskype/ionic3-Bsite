import { Component,Injectable  } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController, ToastController } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {UserModel} from '../../models/user.model';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage extends ProtectedPage {

  public user: UserModel;
  imageURI:any;
  imageFileName:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage, 
   // private transfer: FileTransfer,
    //private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    
    super(navCtrl, navParams, storage);
    
    this.storage.get('user').then(user => {
      this.user = user;
    });
    
  }

  getImage() {
  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  // }

  // this.camera.getPicture(options).then((imageData) => {
  //   this.imageURI = imageData;
  // }, (err) => {
  //   console.log(err);
  //   this.presentToast(err);
  // });
}

uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  // const fileTransfer: FileTransferObject = this.transfer.create();

  // let options: FileUploadOptions = {
  //   fileKey: 'ionicfile',
  //   fileName: 'ionicfile',
  //   chunkedMode: false,
  //   mimeType: "image/jpeg",
  //   headers: {}
  // }

  // fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
  //   .then((data) => {
  //   console.log(data+" Uploaded Successfully");
  //   this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
  //   loader.dismiss();
  //   this.presentToast("Image uploaded successfully");
  // }, (err) => {
  //   console.log(err);
  //   loader.dismiss();
  //   this.presentToast(err);
  // });
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
