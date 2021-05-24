import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;


  constructor(private router: Router, private authService: AuthService) { }
  firstName = new FormControl(this.authService.currentUser.firstName)
  lastName = new FormControl(this.authService.currentUser.lastName)
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    console.log(formValues);
    this.router.navigate(['events'])
  }
  cancel() {
    this.router.navigate(['events'])
  }

}
