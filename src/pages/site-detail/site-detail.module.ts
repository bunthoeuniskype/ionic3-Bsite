import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteDetailPage } from './site-detail';

@NgModule({
  declarations: [
    SiteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteDetailPage),
  ],
  exports: [
    SiteDetailPage
  ]
})
export class SiteDetailPageModule {}
