import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    LoginRoutingModule,
    MatFormFieldModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
