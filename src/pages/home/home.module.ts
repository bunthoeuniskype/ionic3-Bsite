import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    HomePage,
    TimeAgoPipe,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
