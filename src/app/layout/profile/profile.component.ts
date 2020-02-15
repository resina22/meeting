import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  imgProfile = 'https://www.a12.com/source/files/originals/natureza-260802.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
