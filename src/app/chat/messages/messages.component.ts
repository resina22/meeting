import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  findIsOpen = false;
  img = 'https://generated.photos/vue-static/home/hero/4.png';
  constructor() { }

  ngOnInit(): void {
  }

  closeFindContact() {
    this.findIsOpen = false;
  }

}
