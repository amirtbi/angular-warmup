import { Component } from '@angular/core';
import { ApiService } from './shared/api.shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'route-app';

  constructor(private apiService: ApiService) {}

  getRecipe() {
    this.apiService
      .getHttp('recipes/complexSearch')
      .subscribe((data) => console.warn('data', data));
  }
}
