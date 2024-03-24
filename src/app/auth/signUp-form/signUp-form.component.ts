import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { CustomValidatorsFn } from 'src/app/cores/validators/validators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'signup-form',
  templateUrl: './signUp-form.component.html',
  styleUrls: ['../auth.component.style.css'],
})
export class SignUpComponent implements OnDestroy {
  @Output() emitAuthType = new EventEmitter<'signUp' | 'signIn'>();
  @Output() emitError = new EventEmitter<boolean>();
  signUpForm: FormGroup;
  signUp$: Subscription;
  validatorFn = new CustomValidatorsFn();

  constructor(private authService: AuthService, private router: Router) {
    this.signUpForm = new FormGroup({
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

  signUp() {
    this.signUp$ = this.authService
      .signUp({
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      })
      .subscribe({
        next: () => {
          this.router.navigate(['/recipes']);
        },
        error: () => {
          this.emitError.emit(true);
        },
        complete: () => { this.signUpForm.reset(); },
      });
  }

  setAuthType() {
    this.emitAuthType.emit('signIn');
  }
  submitAuth() { }

  ngOnDestroy(): void {
    this.signUp$.unsubscribe();
  }
}
