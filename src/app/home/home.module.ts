import { SignupComponent } from './signup/signup.component';
import { MessageModule } from './../shared/components/message/message.module';
import { SigninComponent } from './sigin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessageModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule {

}
