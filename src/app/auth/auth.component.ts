import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  authType: 'signUp' | 'signIn' = 'signUp';

  constructor() {}

  setActiveAuth(authType: 'signUp' | 'signIn') {
    console.log('emitted value', authType);
    this.authType = authType;
  }
}
