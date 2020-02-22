import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadComponent } from './load/load.component';

@NgModule({
  declarations: [
    LoadComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatDialogModule,
    LoadComponent
  ]
})
export class SharedModule { }
