import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  currentFetchStatus: string = '';
  isLoggedin = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {}

  logOut() {
    this.authService.logOut();
  }
  navigateToAuthPage() {
    this.router.navigate(['/Auth'], { queryParams: { auth: 'signIn' } });
  }
  ngOnInit(): void {
    this.authService.userIsLoggedIn.subscribe((isAuth) => {
      console.log('is auth', isAuth);
      this.isLoggedin = isAuth;
    });
  }
}
