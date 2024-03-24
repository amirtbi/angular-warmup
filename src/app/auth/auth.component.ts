import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  authType: 'signUp' | 'signIn' = 'signUp';
  error = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  setActiveAuth(authType: 'signUp' | 'signIn') {
    this.router.navigate([], {
      queryParams: { auth: authType },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  toggleError() {
    this.error = !this.error;
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((route: Params) => {
      if (route['auth'] && route['auth'] === 'signIn') {
        this.authType = 'signIn';
      } else {
        this.authType = 'signUp';
      }
    });
  }
}
