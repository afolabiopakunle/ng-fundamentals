import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: "./event-details.component.html",
    styles: [`
    .container: {
        padding: 0 20px 0 20px;
    }

    .event-image {
        height: 200px
    }
    `]
}) 

export class EventDetailsComponent implements OnInit {
    
    event: any;

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
        console.log(this.event);
    }
    
}