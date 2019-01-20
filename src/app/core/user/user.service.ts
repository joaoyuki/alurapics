import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User>(null); //Ele vai emitir um User e quem fizer o subscribe, vai receber um User
  userName: string = '';

  constructor(private tokenService: TokenService) {
    //Esse serviço vai ser criado assim que eu entrar no sistema, antes mesmo de tentar logar
    if (this.tokenService.hasToken() == true) {
      this.decodeAndNotify();
    }

  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() { //Quem chamar esse método vai receber um subscribe
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User; //Estou fazendo um cast para o tipo User
    console.log('Usuário do token: id:' + user.id + ' nome: ' + user.name) ;
    this.userName = user.name;
    this.userSubject.next(user); //Aqui iremos emitir o User decodificado
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    console.log('Chamando a função getUserName');
    return this.userName;
  }

}
