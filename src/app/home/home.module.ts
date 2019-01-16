import { MessageModule } from './../shared/components/message/message.module';
import { SigninComponent } from './sigin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessageModule,
    RouterModule
  ]
})
export class HomeModule {

}
