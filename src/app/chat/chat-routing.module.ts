import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat.component';
import { MessagesComponent } from './messages/messages.component';

const CHAT_ROUTES: Routes = [
  { path: 'chat', component: MessagesComponent, data: {title: 'Mensagens'} },
  { path: 'chat/:id', component: ChatComponent, data: {title: 'Chat'} }
];

@NgModule({
  imports: [
    RouterModule.forChild(CHAT_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})

export class ChatRoutingModule {}
