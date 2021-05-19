import { Component } from "@angular/core";
import { AuthService } from "../users/auth.service";

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
    constructor(public authService: AuthService){}
}