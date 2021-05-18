import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'events-list',
    template: `
            <div>
            <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events"  class="col-md-5">
                <event-thumbnail (click)="callToastr(event.name)" [event]='event' (eventClick)="eventClicked($event)"></event-thumbnail>
            </div>
        </div>
        </div>`
})
export class EventsListComponent implements OnInit {
   
    events: any;

    constructor(private eventService: EventService, private toastrService: ToastrService) {}

    ngOnInit() {
       this.eventService.getEvents().subscribe(events => this.events = events)
    }
    eventClicked(data) {
        console.log(data)
    }
    callToastr(data) {
        this.toastrService.success(data)
    }

}