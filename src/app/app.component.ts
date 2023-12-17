import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentActiveTab = 'recipes';

  isRecipeActive() {
    return this.currentActiveTab === 'recipes';
  }

  isShoppingListActive() {
    return this.currentActiveTab === 'shoppingList';
  }

  navigateTo(currentData: string) {
    this.currentActiveTab = currentData;
  }
}
