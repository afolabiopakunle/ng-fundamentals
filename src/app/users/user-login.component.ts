import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './user-login.component.html',
})

export class UserLoginComponent {
    userName: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {}
    submitForm(formData) {
        this.authService.login(formData.userName, formData.password);
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}