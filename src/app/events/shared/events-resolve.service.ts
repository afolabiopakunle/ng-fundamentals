import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./event.service";
import { map } from 'rxjs/operators'

@Injectable()
export class EventsResolveService implements Resolve {
    
    constructor(private eventsService: EventService) {}

    resolve() {
        return this.eventsService.getEvents().pipe(map(events => events))
    }
}