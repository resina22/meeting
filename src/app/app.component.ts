import {
  Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';
import { OnInit, Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { LoadService } from './shared/load/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  private loadingSubscribe: Subscription;
  constructor(
    private router: Router,
    private loadService: LoadService
  ) {}

  ngOnInit() {
    this.loadingSubscribe = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadService.toggle();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loadService.toggle();
      }
    });
  }

}
