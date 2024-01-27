import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLoggedIn = false;

  constructor() {}
  logIn() {
    this.userIsLoggedIn = true;
  }

  isAuth() {
    return this.userIsLoggedIn;
  }
  logOut() {
    this.userIsLoggedIn = false;
  }
}
