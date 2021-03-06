import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {MyApp} from './app.component';
import {HttpModule, Http} from '@angular/http';
import {AuthHttp, AuthConfig,JwtHelper} from 'angular2-jwt';
import {Storage} from '@ionic/storage';
import {AuthService} from '../providers/auth-service';
import {BooksService} from '../providers/books-service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { ClientProvider } from '../providers/client/client';
import { Facebook } from '@ionic-native/facebook';

//import { TabsPage } from '../pages/tabs/tabs';
//import { ProfilePage } from '../pages/profile-page/profile-page';
//import { BookInfoPage } from '../pages/books-info-page/books-info-page';
//import { SiteInfoPage } from '../pages/site-info/site-info';

let storage = new Storage({});

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    //TabsPage,
   //ProfilePage,
   // BookIPage,
    //SiteInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'}),
    IonicStorageModule.forRoot(),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //SiteInfoPage,
   // TabsPage
  ],
  providers: [
    StatusBar,
    JwtHelper,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    AuthService,
    BooksService,
    ClientProvider,
    Facebook
  ]
})
export class AppModule {}
