import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'signin-form',
  templateUrl: './signIn-form.component.html',
})
export class SignInComponent {
  @Output() emitAuthType = new EventEmitter<'signUp' | 'signIn'>();
  signInForm: FormGroup;
  constructor(private authService: AuthService) {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  signIn() {
    this.authService.signIn({
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    });
  }
  setAuthType() {
    this.emitAuthType.emit('signUp');
  }
}
