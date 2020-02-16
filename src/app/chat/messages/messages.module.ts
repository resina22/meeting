import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChatRoutingModule } from '../chat-routing.module';
import { FindContactComponent } from './find-contact/find-contact.component';

@NgModule({
  declarations: [
    FindContactComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    ChatRoutingModule,
  ],
  exports: [
    FindContactComponent
  ]
})
export class MessagesModule { }
