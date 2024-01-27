import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const canActivateRoute: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authservice = inject(AuthService);

  if (authservice.isAuth()) {
    return true;
  }
  return router.createUrlTree(['/home']);
  //   return router.navigate(['/home']);
};
