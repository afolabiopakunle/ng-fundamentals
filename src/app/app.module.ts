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
import { UserLoginComponent } from './users/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './users/auth.service';
import { UserProfileComponent } from './users/user-profile.component';
import { SessionsListComponent } from './events/event-details/sessions-list.component';

@NgModule({
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    e404Component,
    UserLoginComponent,
    UserProfileComponent,
    SessionsListComponent
  ],
  providers: [EventGuard, {provide: 'canDeactivateNewEvent', useValue: routerDeactivateBlocker}, AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function routerDeactivateBlocker() {
  return false;
}