import {Component, ViewChild} from '@angular/core';
import {Nav, Platform,MenuController,App,ModalController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';
import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';
import {FooterPage} from '../pages/footer/footer';
import {GlobalProvider} from '../providers/global/global';
import {UserModel} from '../models/user.model';

export interface PageInterface {
  title: string;
  component: any;
  index?: number;
  method?: null;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
    // set our app's pages
  appPages: PageInterface[] = [
    {title: 'page.books.list', component: FooterPage, index: 4 }, 
    {title: 'Add Post', component: FooterPage, index: 7 },
  ];
  rootPage: any = 'FooterPage';
  public idToken: String;
  public user: UserModel;

  pages: Array<{title: string, component: any, method?: any,index:Number}>;
  accountP: Array<{title: string, component: any, method?: any,index:Number,icon:string}>;
  langs:Array<{title:string, value:string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public storage:Storage,
    public global: GlobalProvider,
    public menu: MenuController,    
    public app:App,
    public modalCtrl: ModalController ,
   public translate: TranslateService) {

    this.initializeApp();

    translate.setDefaultLang(this.global.getLang());
    console.log(this.global.getLang());

    this.menu.enable(true);

    // used for an example of ngFor and navigation
    this.pages = [  
      // {title: 'page.books.list', component: 'BooksPage'},
      // {title: 'Maps', component: FooterPage,index: 1},
      // {title: 'Notifications', component: FooterPage,index: 1},
      // {title: 'Add Post', component: FooterPage, index: 7},
    ];    

      this.langs = [  
      {title: 'khmer', value: 'kh'},
      {title: 'english', value: 'en'},
    ];    

    this.accountP = [];
    this.storage.get('id_token').then(token => {
            this.idToken = token;
          if (this.idToken === null) {
            this.accountP.push({title: 'button.login', component: 'LoginPage',index:1,icon:"login"});
            this.accountP.push({title: 'button.register', component: 'RegisterPage',index:1,icon:"person-add"});
          }else{
            this.accountP.push({title: 'page.logout', component: 'LoginPage', method: 'logout',index:1,icon:"exit"});        
          }
    });

    this.storage.get('user').then(user => {
      this.user = user;
    });

  }

  openModalProfile() {
    let obj = {"user":this.user};   
    let myModal = this.modalCtrl.create("ProfileModalPage",obj);
    myModal.present();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.startupTokenRefresh();
    });
  }

   translateFun(val:string) {
      localStorage.setItem('lang',val);
      this.translate.use(val);
      this.app.getRootNav().push('FooterPage');
    }

  openPage(page:PageInterface) {

    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }
    
    this.menu.close();

    if (page.index) {
     // this.nav.setRoot(page.component, { tabIndex: page.index });
      this.app.getRootNav().push(page.component, { tabIndex: page.index });
     // this.menuCtrl.enable(true);     
     
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    //this.nav.setRoot(page.component);
  }
}
