import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MessagesComponent } from './messages/messages.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ConversationComponent } from './conversation.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    ConversationComponent,
    MessagesComponent,
    TextBoxComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
  exports: [
    ConversationComponent,
  ]
})
export class ConversationModule { }
