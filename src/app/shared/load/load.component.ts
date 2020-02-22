import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { LoadService } from './load.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit, OnDestroy {
  public visible = false;
  private subscription: Subscription;

  constructor(
    private loadService: LoadService
  ) { }

  ngOnInit() {
    this.subscription = this.loadService.observable.subscribe(
      value => this.visible = value
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
