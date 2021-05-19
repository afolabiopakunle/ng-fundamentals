import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()

export class AuthService {

    currentUser: IUser;
    login(userName: string, password: string) {
        this.currentUser = {
            userName: userName,
            userId: 1,
            lastName: 'Opakunle',
            firstName: userName
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}