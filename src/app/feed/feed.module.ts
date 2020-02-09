import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    FeedRoutingModule,
  ],
  exports: [
    FeedComponent,
  ]
})
export class FeedModule { }
