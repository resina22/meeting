import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ProfileModule } from '../layout/profile/profile.module';
import { ActionComponent } from './action/action.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    SearchComponent,
    ActionComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ProfileModule,
    MatChipsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    SearchRoutingModule,
  ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }
