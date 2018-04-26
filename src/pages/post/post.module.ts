import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    PostPage,
  ],
  imports: [
    IonicPageModule.forChild(PostPage),
    TranslateModule.forChild()
  ],
  exports: [
    PostPage
  ]
})
export class PostPageModule {}
