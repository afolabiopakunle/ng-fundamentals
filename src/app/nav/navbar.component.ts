import { Component } from "@angular/core";

@Component({
    selector: 'event-navbar',
    templateUrl: './navbar.component.html',
    styles: [
        `
        .nav.navbar-nav {
            font-size: 15px;
            #searchForm {
                margin-right: 100px;
            }

            @media (max-width: 600px) {
                #searchForm {
                    display: none;
                }
            }
        }
        `
    ]
})

export class NavbarComponent {

}