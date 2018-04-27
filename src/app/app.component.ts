import {Component, ViewChild} from '@angular/core';
import {Nav, Platform,MenuController,NavController,App} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';
import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';
import {FooterPage} from '../pages/footer/footer';

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
  private stringArr = '';

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public storage:Storage,
    public menu: MenuController,    
    public app:App,
    //public navCtrl: NavController,
    translate: TranslateService) {

    this.initializeApp();

    translate.setDefaultLang('en');

    this.menu.enable(true);

    // used for an example of ngFor and navigation
    this.pages = [  
      // {title: 'page.books.list', component: 'BooksPage'},
      {title: 'Maps', component: 'MapPage'},
      {title: 'Notifications', component: 'NotificationsPage'},
      {title: 'Add Post', component: 'PostPage'},
    ];    

    this.storage.get('id_token').then(token => {
            this.idToken = token;
          if (this.idToken === null) {
            this.pages.push({title: 'button.login', component: 'LoginPage'});
            this.pages.push({title: 'button.register', component: 'RegisterPage'});
          }else{
            this.pages.push({title: 'page.logout', component: 'LoginPage', method: 'logout'});        
          }
    });

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
