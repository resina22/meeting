import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopbarService } from '../layout/topbar/topbar.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private topbarService: TopbarService
  ) {
    this.topbarService.title(
      this.route.snapshot.data.title
    );
  }

  ngOnInit() {}

}
