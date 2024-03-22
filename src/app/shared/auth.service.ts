import { Injectable } from '@angular/core';
import { SupbaseService } from './supabase.service';
import { IAuth } from './models/auth.models';
import { BehaviorSubject, Subject } from 'rxjs';
import { from, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private supabaseService: SupbaseService) {
    this.userIsLoggedIn.next(false);
  }
  async signUp(auth: IAuth) {
    const authInfo = await this.supabaseService.supabase.auth.signUp({
      email: auth.email,
      password: auth.password,
    });
    console.warn('Auth info', authInfo);
  }
  signIn(auth: IAuth) {
    const authInfo$ = from(
      this.supabaseService.supabase.auth.signIn({
        email: auth.email,
        password: auth.password,
      })
    ).pipe(
      map((data) => {
        if (data.error) {
          this.userIsLoggedIn.next(false);
          throw new Error('User data is not valid');
        } else {
          this.userIsLoggedIn.next(data.user?.aud === 'authenticated');
        }
      })
    );
    return authInfo$;
  }
  isAuth() {
    return this.userIsLoggedIn.value;
  }
  logOut() {
    this.userIsLoggedIn.next(false);
  }
}
