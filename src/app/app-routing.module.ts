import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { e404Component } from "./events/404.component";
import { CreateEventComponent } from "./events/event-create.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventGuard } from "./events/event-guard";
import { EventsListComponent } from "./events/events-list.component";

const appRoutes: Routes = [
    {path: 'events', component: EventsListComponent },
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateNewEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventGuard] },
    {path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: '404', component: e404Component}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}