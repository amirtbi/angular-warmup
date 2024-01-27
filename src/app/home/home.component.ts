import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  authService = inject(AuthService);
  userIsLoggedIn = false;

  getLogStatus() {
    return this.authService.isAuth();
  }
  logIn() {
    this.authService.logIn();
  }
  logOut() {
    this.authService.logOut();
    console.warn('after logout', this.userIsLoggedIn);
  }

  ngOnInit() {
    this.userIsLoggedIn = this.authService.isAuth();
  }
}
