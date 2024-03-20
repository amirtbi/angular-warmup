import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signUp-form.component.html',
})
export class SignUpComponent {
  @Output() emitAuthType = new EventEmitter<'signUp' | 'signIn'>();
  signUpForm: FormGroup;

  constructor(private authService: AuthService) {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  signUp() {
    this.authService.signUp({
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
    });
    console.log('Signup information', this.signUpForm.value);
  }

  setAuthType() {
    this.emitAuthType.emit('signIn');
  }
  submitAuth() {}
}
