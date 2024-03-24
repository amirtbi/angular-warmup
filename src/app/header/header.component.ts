import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  currentFetchStatus: string = '';
  isLoggedin = false;
  userLogedIn$: Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnDestroy(): void {
    this.userLogedIn$.unsubscribe();
  }
  logOut() {
    this.authService.logOut();
  }
  navigateToAuthPage() {
    this.router.navigate(['/Auth'], { queryParams: { auth: 'signIn' } });
  }
  ngOnInit(): void {
    this.userLogedIn$ = this.authService.userIsLoggedIn.subscribe((isAuth) => {
      this.isLoggedin = isAuth;
    });
  }
}
