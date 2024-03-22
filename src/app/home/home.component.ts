import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { inject } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../shared/api.shared.service';

interface IHttpData {
  email: string;
  body: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnDestroy {
  private intervalSubscription: Subscription;
  authService = inject(AuthService);
  apiService = inject(ApiService);
  userIsLoggedIn = false;
  counterValue = 'pending';
  serverResponse$: Observable<any>;
  getLogStatus() {
    return this.authService.isAuth();
  }
  ngOnDestroy(): void {}

  ngOnInit() {
    this.authService.userIsLoggedIn.subscribe((isAuth) => {
      this.userIsLoggedIn = isAuth;
    });

    // const customHttpRequest = new Observable((observer) => {
    //   fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       observer.next(data);
    //     })
    //     .catch((error) => observer.error('error happened'));
    // });

    // customHttpRequest
    //   .pipe(
    //     map((res) => {
    //       const response = res as any;
    //       const mappedData = response.map((item: any) => {
    //         return {
    //           email: item.email,
    //           body: item.body,
    //         };
    //       });
    //       return mappedData;
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.warn('data', data);
    //   });
  }
}
