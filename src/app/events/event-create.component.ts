import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";


@Component({
    template: `
        <p>[Create Events Here]</p>
        <button class="btn btn-primary">Save</button> <button class="btn btn-warn" (click)="back()">Cancel</button>
    `
})

export class CreateEventComponent {

    constructor(private router: Router) {}
    back() {
        this.router.navigate(['events'])
    }
}