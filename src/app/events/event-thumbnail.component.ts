import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template:  `
                <div class="well hoverwell thumbnail">
                <h2> {{ event.name }} </h2>
                <div>Date: {{ event.date }}</div>  
                <div>Time: {{ event.time }}</div>  
                <div>Price: \${{ event.price }}</div>  
                <div>
                    <span>Location: {{ event.location.address }}</span>
                    <span>&nbsp; &nbsp;</span>
                    <span> {{ event.location.city }}, {{ event.location.country }} </span>
                </div>
            </div>
    `,
    styles: [`
        .thumbnail {
            min-height: 210px;
        }
    `]
})

export class EventThumbnailComponent {
   @Input() event: any;
   @Output() eventClick = new EventEmitter();

   handleClick() {
       console.log("clicked ");
       this.eventClick.emit(this.event)
   }
}