import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './newUser';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) {

  }

  checkUserNameTaken(userName: string) {

    return this.httpClient.get(API + '/user/exists/' + userName);

  }

  signup(newUser: NewUser) {
    return this.httpClient.post(API + '/user/signup', newUser);
  }

}
