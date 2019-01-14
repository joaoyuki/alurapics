import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{


  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    });

  }

}
