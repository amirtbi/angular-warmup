import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shared/shopping.service';
@Component({
  selector: 'shopping-items',
  templateUrl: './shopping-items.component.html',
})
export class ShoppingListItems implements OnInit {
  shoppingList: any[] = [];
  totalCost = 0;
  constructor(private shoppingService: ShoppingService) {}

  getTotalCost() {
    return this.totalCost;
  }
  refreshList() {
    this.shoppingList = [];
    this.shoppingService.getShoppingList().subscribe((data: any) => {
      const { aisles, cost: totalCost, endData, startData } = data;
      this.totalCost = totalCost;
      for (const item of aisles) {
        let totalCost = 0;
        item.items.forEach((element: any) => {
          totalCost += element.cost;
        });
        this.shoppingList.push({
          title: item.aisle,
          totalCost: totalCost.toFixed(2),
        });
      }
    });
  }
  ngOnInit(): void {
    this.shoppingService.getShoppingList().subscribe((data: any) => {
      const { aisles, cost: totalCost, endData, startData } = data;
      this.totalCost = totalCost;
      for (const item of aisles) {
        let totalCost = 0;
        item.items.forEach((element: any) => {
          totalCost += element.cost;
        });
        this.shoppingList.push({
          title: item.aisle,
          totalCost: totalCost.toFixed(2),
        });
      }
    });
  }
}
