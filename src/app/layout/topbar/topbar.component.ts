import { Component, OnInit } from '@angular/core';
import { TopbarService } from './topbar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  title: string;
  imgProfile = 'https://www.a12.com/source/files/originals/natureza-260802.jpg';
  constructor(
    private topbarService: TopbarService
  ) { }

  ngOnInit(): void {
    this.topbarService.observable.subscribe(value => this.title = value);
  }

  toggle() {
  }

}
