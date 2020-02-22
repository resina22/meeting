import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent implements OnInit {
  @Input() tooltip = '';
  @Input() label = '';
  @Input() link = '.';
  @Input() icon = '';

  constructor() { }

  ngOnInit() {}
}
