import {
  Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, Output, EventEmitter
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-find-contact',
  templateUrl: './find-contact.component.html',
  styleUrls: ['./find-contact.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class FindContactComponent implements OnInit {
  @Output() findContactEmitter = new EventEmitter<null>();
  @ViewChild('inputFindContact', {static: true}) inputFindContact: ElementRef;
  contacts: Object[] = [];
  load = false;

  constructor() {}

  ngOnInit() {
    fromEvent(this.inputFindContact.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      filter(res => res.length > 2),
      distinctUntilChanged(),
      debounceTime(300),
    ).subscribe((text: string) => {
      this.load = false;
      this.contacts.push({
        id: 1,
        name: 'Pedro',
        img: ''
      });
    });
  }

  closeFindContact() {
    this.findContactEmitter.emit();
  }
}
