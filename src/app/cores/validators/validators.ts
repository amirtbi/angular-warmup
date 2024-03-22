import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
export class CustomValidatorsFn {
  spaceNotAllowed(control: AbstractControl) {
    if (control.value !== null && control.value.indexOf(' ') !== -1) {
      return { spaceNotAllowed: true };
    }
    return null;
  }

  emailPattern(control: AbstractControl) {
    if (
      control.value !== null &&
      control.value !== '' &&
      !String(control.value).includes('@')
    ) {
      return { emailPatternDismatch: true };
    }
    return null;
  }

  forBiddenNameLength(control: AbstractControl) {
    if (control.value !== null && String(control.value).length < 3) {
      return { nameLengthMistMatch: true };
    }
    return null;
  }

  forBiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== null && control.value === 'test@test.com') {
          resolve({ forbbidenEmail: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }
}
