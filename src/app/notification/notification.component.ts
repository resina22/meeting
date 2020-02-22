import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopbarService } from '../layout/topbar/topbar.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications = Array(100).fill('');
  constructor(
    private route: ActivatedRoute,
    private topbarService: TopbarService
  ) { }

  ngOnInit(): void {
    this.topbarService.title(
      this.route.snapshot.data.title
    );
  }

}
