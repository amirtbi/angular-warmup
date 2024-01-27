import { Component } from '@angular/core';
import { ShoppingService } from 'src/app/shared/shopping.service';
@Component({
  selector: 'shopping-form',
  templateUrl: './shopping-form.component.html',
})
export class ShoppingFormComponent {
  public aisle: string = '';
  public title: string = '';
  constructor(private shoppingService: ShoppingService) {}
  addToShoppingList() {
    this.shoppingService.addToShoppingList({
      item: this.title,
      aisle: this.aisle,
      parse: true,
    });
  }
}
