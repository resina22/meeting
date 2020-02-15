import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }
