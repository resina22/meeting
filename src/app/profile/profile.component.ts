import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopbarService } from '../layout/topbar/topbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private topbarService: TopbarService
  ) {
    this.topbarService.title(
      this.route.snapshot.data.title
    );
  }

  ngOnInit(): void {
  }

}
