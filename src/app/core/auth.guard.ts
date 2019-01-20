import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  //Caso retorna True, o usuário tem acesso a rota, caso retorne false, o usuário não tem acesso
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      console.log('ativou o guarda de rota');
      if (this.userService.isLogged()) {
        console.log('caiu no if');
        console.log(this.userService.getUserName);
        this.router.navigate(['user', this.userService.getUserName()]);
        return false;
      }
    return true;
  }

}
