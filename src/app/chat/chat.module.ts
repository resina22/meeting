import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { ConversationModule } from './conversation/conversation.module';

@NgModule({
  declarations: [
    ChatComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    ChatRoutingModule,
    ConversationModule,
  ]
})
export class ChatModule { }
