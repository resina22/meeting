import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { BasicModule } from './basic/basic.module';
import { ProfileComponent } from './profile.component';
import { InterestModule } from './interest/interest.module';
import { LocationModule } from './location/location.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BasicModule,
    CommonModule,
    MatTabsModule,
    InterestModule,
    LocationModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
