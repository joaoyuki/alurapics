import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { e } from '@angular/core/src/render3';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {


  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userNameInput.nativeElement.focus();

  }

  login() {
    console.log('vai se autenticar');
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
    .authenticate(userName, password)
    .subscribe( () => {
      console.log('autenticado');
      this.router.navigate(['user', userName]); //rota,segmento(paramentro) = userName/:userName
    }, erro => {
      console.log(erro);
      console.log('erro');
      this.loginForm.reset();
      this.userNameInput.nativeElement.focus();
    });

  }

}
