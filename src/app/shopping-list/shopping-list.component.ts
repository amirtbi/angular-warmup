import { Component } from '@angular/core';
import { Ingredient } from '../shared';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  value = '10';
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(data: Ingredient) {
    this.ingredients.push(data);
  }
}
