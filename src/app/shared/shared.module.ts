import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadComponent } from './load/load.component';
import { AppRoutingModule } from '../app-routing.module';
import { FloatButtonComponent } from './float-button/float-button.component';

@NgModule({
  declarations: [
    LoadComponent,
    FloatButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoadComponent,
    MatDialogModule,
    FloatButtonComponent,
  ]
})
export class SharedModule { }
