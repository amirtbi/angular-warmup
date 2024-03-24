import { Injectable } from '@angular/core';
import { SupbaseService } from './supabase.service';
import { IAuth } from './models/auth.models';
import { BehaviorSubject, Subject } from 'rxjs';
import { from, map } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  userIsLoggedIn = new BehaviorSubject<boolean>(false);
  private tokenExpiration: any = null;
  tokenTimeOut: any
  constructor(private supabaseService: SupbaseService) {
    this.userIsLoggedIn.next(false);

  }
  signUp(auth: IAuth) {
    const authInfo$ = from(
      this.supabaseService.supabase.auth.signUp({
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
          this.tokenExpiration = data.session?.expires_at;
          const expiration = new Date(this.tokenExpiration).getTime() - new Date().getTime();
          this.autoLogout(expiration * 1000);
          this.userIsLoggedIn.next(data.user?.aud === 'authenticated');
        }
        return data
      })
    );
    return authInfo$;
  }
  isAuth() {
    return this.userIsLoggedIn.value;
  }
  logOut() {
    this.userIsLoggedIn.next(false);
    localStorage.removeItem("supabase.auth.token");
    clearTimeout(this.tokenTimeOut);
    this.tokenExpiration = null;
  }

  autoLogin() {
    const storedAuthData = JSON.parse(localStorage.getItem("supabase.auth.token") || "{}");
    const remainedDuration = new Date(storedAuthData.expiresAt).getTime() - new Date().getTime() / 1000;
    if (remainedDuration > 0 && storedAuthData) {
      this.userIsLoggedIn.next(true);
      this.autoLogout(remainedDuration * 1000);
    }
  }
  autoLogout(expirationDuration: number) {
    this.tokenTimeOut = setTimeout(() => {
      this.logOut();
    }, expirationDuration)
  }
}
