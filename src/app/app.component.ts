import {Component, ViewChild} from '@angular/core';
import {Nav, Platform,MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';
import {TranslateService} from '@ngx-translate/core';

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

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public menu: MenuController,
    translate: TranslateService) {

    this.initializeApp();

    translate.setDefaultLang('en');

    // used for an example of ngFor and navigation
    this.pages = [  
      // {title: 'page.books.list', component: 'BooksPage'},
      {title: 'Maps', component: 'MapPage'},
      {title: 'Notifications', component: 'NotificationsPage'},
      {title: 'Add Post', component: 'PostPage'},
      {title: 'page.logout', component: 'LoginPage', method: 'logout'}
    ];
    
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
      this.nav.setRoot(page.component, { tabIndex: page.index });

    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    //this.nav.setRoot(page.component);
  }
}
