import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.shared.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'route-app';

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {
    this.authService.userIsLoggedIn.subscribe(isAuth => {
      if (!isAuth) {
        this.router.navigate(['/home'])
      }
    })
  }

  getRecipe() {
    this.apiService
      .getHttp('recipes/complexSearch')
      .subscribe((data) => console.warn('data', data));
  }

  ngOnInit(): void { }
}
