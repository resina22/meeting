import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { MediaComponent } from './media/media.component';
import { FeedRoutingModule } from './feed-routing.module';
import { ActionComponent } from './action/action.component';
import { ContentComponent } from './content/content.component';
import { ProfileModule } from '../layout/profile/profile.module';

@NgModule({
  declarations: [
    FeedComponent,
    MediaComponent,
    ActionComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ProfileModule,
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
