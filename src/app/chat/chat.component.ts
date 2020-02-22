import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopbarService } from '../layout/topbar/topbar.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

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
