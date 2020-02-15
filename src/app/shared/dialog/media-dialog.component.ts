import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'media-dialog',
  templateUrl: './media-dialog.html'
})
export class MediaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MediaDialogComponent
  ) {}

  close() {
    this.dialogRef.close();
  }
}
