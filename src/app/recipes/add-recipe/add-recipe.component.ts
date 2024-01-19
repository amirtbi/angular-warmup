import { Component } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipes.service';
@Component({
  selector: 'recipe-form',
  templateUrl: './add-recipe.component.html',
})
export class RecipeFormComponent {
  constructor(private recipeService: RecipeService) {}

  addToPlan() {
    return this.recipeService
      .defineRecipe({ title: 'new recipe' })
      .subscribe((data) => console.warn('new recipe', data));
  }
}
