import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed.component';

const FEED_ROUTES: Routes = [
  {
    path: 'feed',
    pathMatch: 'full',
    component: FeedComponent,
    data: { title: 'Página inicial' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(FEED_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})

export class FeedRoutingModule {}
