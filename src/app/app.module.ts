import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotificationModule } from './notification/notification.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';
import { FeedModule } from './feed/feed.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FeedModule,
    ChatModule,
    LayoutModule,
    SharedModule,
    SearchModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NotificationModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
