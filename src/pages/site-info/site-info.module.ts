import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteInfoPage } from './site-info';

@NgModule({
  declarations: [
   // SiteInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteInfoPage),
  ],
  exports: [
   // SiteInfoPage
  ]
})
export class SiteInfoPageModule {}
