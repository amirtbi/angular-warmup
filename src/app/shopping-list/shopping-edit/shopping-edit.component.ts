import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInputEl') nameInputEl: ElementRef;
  @ViewChild('numberInputEl') numberInputEl: ElementRef;
  @Output() emitAddedIngredients = new EventEmitter<Ingredient>();

  shoppingList: { name: string; number: number }[] = [];

  addShoppingItem(e: Event) {
    e.preventDefault();

    this.emitAddedIngredients.emit(
      new Ingredient(
        this.nameInputEl.nativeElement.value,
        this.numberInputEl.nativeElement.value
      )
    );
  }
}
