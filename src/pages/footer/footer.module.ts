import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FooterPage } from './footer';
//import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    FooterPage,
   // HomePage,
  ],
  imports: [
    IonicPageModule.forChild(FooterPage),
  ]
})
export class FooterPageModule {}
