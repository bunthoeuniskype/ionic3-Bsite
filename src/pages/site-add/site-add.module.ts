import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteAddPage } from './site-add';

@NgModule({
  declarations: [
    SiteAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteAddPage),
  ],
  exports: [
    SiteAddPage
  ]
})
export class SiteAddPageModule {}
