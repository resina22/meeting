import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';

const SEARCH_ROUTES: Routes = [
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent,
    data: { title: 'search' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(SEARCH_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})

export class SearchRoutingModule {}
