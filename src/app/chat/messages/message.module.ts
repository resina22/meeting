import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
  ],
  exports: [
    MessagesComponent
  ]
})
export class MessageModule { }
