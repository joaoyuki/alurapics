import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptior } from './request.interceptor';

@NgModule({
  declarations:
  [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ HeaderComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, //Diz que iremos prover um Interceptor para o Angular
      useClass: RequestInterceptior, //Dizemos ao Angular para utilizar o nosso interceptor
      multi: true //Diz que pode ter mais de um interceptador e que ele pode encadear a chamada
    }
  ]
})
export class CoreModule {

}
