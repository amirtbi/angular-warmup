import { Injectable } from '@angular/core';
import { SupbaseService } from './supabase.service';
import { IAuth } from './models/auth.models';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLoggedIn = false;

  constructor(private supabaseService: SupbaseService) {}
  logIn() {
    this.userIsLoggedIn = true;
  }

  async signUp(auth: IAuth) {
    const authInfo = await this.supabaseService.supabase.auth.signUp({
      email: auth.email,
      password: auth.password,
    });
    console.warn('Auth info', authInfo);
  }
  async signIn(auth: IAuth) {
    const authInfo = await this.supabaseService.supabase.auth.signIn({
      email: auth.email,
      password: auth.password,
    });
    console.warn('Auth info', authInfo);
  }
  isAuth() {
    return this.userIsLoggedIn;
  }
  logOut() {
    this.userIsLoggedIn = false;
  }
}
