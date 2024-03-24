import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiService } from './shared/api.shared.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'route-app';
  constructor(private apiService: ApiService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.authService.userIsLoggedIn.subscribe(isAuth => {
      if (!isAuth && !this.router.url.includes("Auth")) {
        this.router.navigate(['/Auth'], { queryParams: { auth: 'signIn' } })
      }
    })
  }

  getRecipe() {
    this.apiService
      .getHttp('recipes/complexSearch')
      .subscribe((data) => console.warn('data', data));
  }
}
