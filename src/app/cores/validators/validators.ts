import { AbstractControl, FormControl } from '@angular/forms';

export class CustomValidatorsFn {
  spaceNotAllowed(control: AbstractControl) {
    if (control.value !== null && control.value.indexOf(' ') !== -1) {
      return { spaceNotAllowed: true };
    }
    return null;
  }

  emailPattern(control: AbstractControl) {
    if (control.value !== null && !String(control.value).includes('@')) {
      return { emailPatternDismatch: true };
    }
    return null;
  }
}
