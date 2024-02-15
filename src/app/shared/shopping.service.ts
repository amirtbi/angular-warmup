import { Injectable } from '@angular/core';
import { ApiService } from './api.shared.service';
@Injectable({ providedIn: 'root' })
export class ShoppingService {
  private urlAddToShoppingList = 'shopping-list';
  constructor(private apiService: ApiService) {}

  addToShoppingList(items: { item: string; aisle: string; parse: true }) {
    const { username } = this.apiService.getUserinfo();
    this.apiService
      .postHttp(
        `mealplanner/${username}/${this.urlAddToShoppingList}/items`,
        items
      )
      .subscribe((data) => {
        console.warn('data', data);
      });
  }

  getShoppingList() {
    const { username, hash } = this.apiService.getUserinfo();
    console.warn('listenning...');
    return this.apiService.getHttp(
      `mealplanner/${username}/${this.urlAddToShoppingList}?hash=${hash}`
    );
  }
}
