import { OnInit, OnDestroy, Component, AfterViewInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy, AfterViewInit {
  public loading = false;
  private loadingSubscribe;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
  }

  ngOnDestroy() {
    this.loadingSubscribe.unsubscribe();
  }

  ngAfterViewInit() {
    this.loadingSubscribe = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }
}
