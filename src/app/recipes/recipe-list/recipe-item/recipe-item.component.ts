import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipe') recipe: Recipe;
  @Output() setEmittedLink = new EventEmitter<void>();

  setSelectedRecipe() {
    this.setEmittedLink.emit();
  }
}
