import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopbarService } from 'src/app/layout/topbar/topbar.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  findIsOpen = false;
  img = 'https://generated.photos/vue-static/home/hero/4.png';
  constructor(
    private route: ActivatedRoute,
    private topbarService: TopbarService
  ) { }

  ngOnInit(): void {
    this.topbarService.title(
      this.route.snapshot.data.title
    );
  }

  closeFindContact() {
    this.findIsOpen = false;
  }

}
