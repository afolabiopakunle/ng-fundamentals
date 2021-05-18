import { ThrowStmt } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    templateUrl: './user-login.component.html',
})

export class UserLoginComponent {
    userName: string;
    password: string;
    submitForm(formData) {
        console.log(formData);
        // this.password = ''; this.userName = '';
    }
}