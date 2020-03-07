import {
  Router, NavigationStart, NavigationCancel, NavigationEnd, ActivatedRoute
} from '@angular/router';
import { OnInit, Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { LoadService } from './shared/load/load.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  private loadingSubscribe: Subscription;
  readonly logged: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute,
    private loadService: LoadService
  ) {
    this.logged = this.auth.isLogged;
  }

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
