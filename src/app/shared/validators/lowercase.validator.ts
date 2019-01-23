import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) { //Control seria os inputs de um formulário

  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return {lowerCase: true}//O nome que demos 'lowerCase' é o nome de propriedade que vamos acessar no HTML
  }

  return null; //Caso não tenha erro de validação

}
