import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './model/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() emitSelectedLink = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test 2 Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];

  setEmittedLink(recipeEl: Recipe) {
    this.emitSelectedLink.emit(recipeEl);
  }
}
