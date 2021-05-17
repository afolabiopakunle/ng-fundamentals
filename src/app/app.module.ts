import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './events/event-create.component';
import { e404Component } from './events/404.component';
import { EventGuard } from './events/event-guard';

@NgModule({
    imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    e404Component
  ],
  providers: [EventGuard, {provide: 'canDeactivateNewEvent', useValue: routerDeactivateBlocker}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function routerDeactivateBlocker() {
  return false;
}