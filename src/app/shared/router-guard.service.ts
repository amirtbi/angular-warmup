import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiService } from './api.shared.service';

export const canActivateRoute: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authservice = inject(AuthService);
  const apiService = inject(ApiService);
  console.log('state', state);
  if (
    (authservice.userIsLoggedIn.value && !state.url.includes('Auth')) ||
    (!authservice.userIsLoggedIn.value && state.url.includes('/Auth'))
  ) {
    return true;
  }

  apiService.fetchStatus.next('Pending');
  return router.createUrlTree(['/home']);
};
