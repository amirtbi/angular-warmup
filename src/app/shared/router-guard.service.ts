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

  if (authservice.isAuth()) {
    return true;
  }
  apiService.fetchStatus.next('Pending');
  return router.createUrlTree(['/home']);
};
