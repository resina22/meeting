import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
