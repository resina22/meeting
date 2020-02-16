import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotificationComponent } from './notification.component';

const NOTIFICATION_ROUTES: Routes = [
  {
    path: 'notification',
    component: NotificationComponent,
    data: {title: 'Notificações'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(NOTIFICATION_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})

export class NotificationRoutingModule {}
