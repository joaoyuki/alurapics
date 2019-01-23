import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {

  constructor(
    private signupService: SignupService
  ) {

  }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => { //switchMap diz para pararmos de ouvir o control.valueChanges que é um observable  e começa a ouvir o observable do service
          return this.signupService.checkUserNameTaken(userName);
        }))
        .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
        .pipe(first()); //Pega o primeiro valor que for emitido
    }
  }

}
