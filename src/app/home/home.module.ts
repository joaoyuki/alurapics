import { MessageModule } from './../shared/components/message/message.module';
import { SigninComponent } from './sigin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessageModule
  ]
})
export class HomeModule {

}
