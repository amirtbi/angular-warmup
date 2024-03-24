import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { CustomValidatorsFn } from 'src/app/cores/validators/validators';
@Component({
  selector: 'signin-form',
  templateUrl: './signIn-form.component.html',
  styleUrls: ['../auth.component.style.css'],
})
export class SignInComponent {
  @Output() emitAuthType = new EventEmitter<'signUp' | 'signIn'>();
  @Output() emitError = new EventEmitter<boolean>();
  signInForm: FormGroup;
  validatorFn = new CustomValidatorsFn();
  constructor(private authService: AuthService, private router: Router) {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        this.validatorFn.emailPattern.bind(this),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  signIn() {
    console.log(this.signInForm);
    this.authService
      .signIn({
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
      })
      .subscribe({
        next: (data) => {
          this.router.navigate(['/recipes']);
        },
        error: () => {
          this.emitError.emit(true);
        },
        complete: () => { this.signInForm.reset(); },
      });
  }
  setAuthType() {
    this.emitAuthType.emit('signUp');
  }
}
