import { AuthGuard } from './core/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/sigin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
