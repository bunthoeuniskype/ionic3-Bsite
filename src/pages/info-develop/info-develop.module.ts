import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoDevelopPage } from './info-develop';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    InfoDevelopPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoDevelopPage),
    TranslateModule.forChild(),
  ],
  exports: [
    InfoDevelopPage
  ]
})
export class InfoDevelopPageModule {}
