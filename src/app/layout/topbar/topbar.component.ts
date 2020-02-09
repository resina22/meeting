import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  title = 'Title';
  imgProfile = 'https://www.a12.com/source/files/originals/natureza-260802.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
  }

}
