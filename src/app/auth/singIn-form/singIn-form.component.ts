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
        next: () => {
          this.router.navigate(['/recipes']);
        },
        error: () => {
          this.signInForm.reset();
        },
        complete: () => {},
      });
  }
  setAuthType() {
    this.emitAuthType.emit('signUp');
  }
}
