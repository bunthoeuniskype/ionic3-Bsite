import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddChatRoomPage } from './add-chat-room';

@NgModule({
  declarations: [
    AddChatRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(AddChatRoomPage),
  ],
  exports: [
    AddChatRoomPage
  ]
})
export class AddChatRoomPageModule {}
