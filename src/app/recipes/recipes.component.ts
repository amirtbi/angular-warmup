import { Component } from '@angular/core';
import { Recipe } from './recipe-list/model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  setRecipe(recipe: Recipe) {
    console.log('recieved recipe at parent components', recipe);
    this.selectedRecipe = recipe;
  }
}
