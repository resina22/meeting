import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../layout/profile/profile.component';

const PROFILE_ROUTES: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
    data: { title: 'Perfil' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(PROFILE_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})

export class ProfileRoutingModule {}
