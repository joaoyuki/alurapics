import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lowercase.validator';

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{


  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService
  ) {

  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.email
      ]],
      userName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
        //Validators.pattern(/^[a-z0-9_\-]+$/)//Começa com letra minuscula e pode ter número no final
        //lowerCaseValidator
      ],
        [this.userNotTakenValidatorService.checkUserNameTaken()
      ]
    ],
      fullName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]]
    });
  }

}
