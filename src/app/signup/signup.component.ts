import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isSubmitting: boolean = false;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private userAuthService: UserAuthService
    ){ }
  
signUp(signUpForm: NgForm) {

  this.isSubmitting = true;

  this.userService.register(signUpForm.value).subscribe(

    (response: any) => {

      this.userAuthService.setUserName(response.userName);
      this.userAuthService.setName(response.userFirstName + " " + response.userLastName);
      console.log("user adde successfully")
      this.router.navigate(['/home'])

    },

    (error) => {

      this.isSubmitting = false;
      console.log(error.error.errors);
      
    }
  );
}
}