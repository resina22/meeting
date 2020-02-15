import { Component, OnInit, NgZone, ViewChild } from '@angular/core';

import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;
  constructor(private ngZone: NgZone) {}

  ngOnInit() {}
  triggerResize() {
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
