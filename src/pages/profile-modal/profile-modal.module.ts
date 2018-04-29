import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileModalPage } from './profile-modal';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfileModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileModalPage),
    TranslateModule.forChild(),
  ],
  exports: [
    ProfileModalPage
  ]
})
export class ProfileModalPageModule {}
