import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopbarService } from '../layout/topbar/topbar.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  interests = Array(20).fill('');
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
