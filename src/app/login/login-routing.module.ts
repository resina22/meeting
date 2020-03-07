import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { logged: false }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})

export class LoginRoutingModule {}
