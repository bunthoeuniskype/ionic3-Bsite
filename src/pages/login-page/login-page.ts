import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth-service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import {UserModel} from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  private loginData: FormGroup;
  public user: UserModel;
  public UserFB :any;
  public UserGP :any;
  isLoggedIn:boolean = false;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public facebook:Facebook,
    public googlePlus:GooglePlus) {

    this.loginData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  login() {
    //use this.loginData.value to authenticate the user
    this.authService.login(this.loginData.value)
      .then(() => this.redirectToHome())
      .catch(e => console.log("login error", e));
  }

  redirectToHome() {
    this.navCtrl.setRoot('ProfilePage');
    this.menuCtrl.enable(true);
  }



  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
       console.log(profile);
       this.UserFB = {id: profile['id'],email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }


  loginWithGP() {
       this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.UserGP = res;
        console.log(res);
        this.isLoggedIn = true;
      })
      .catch(err => console.error(err));
  }

  /**
   * Opens a paage
   * 
   * @param page string Page name
   */
  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
