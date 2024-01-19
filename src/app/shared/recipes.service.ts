import { Injectable } from '@angular/core';
import { ApiService } from './api.shared.service';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private urlRecipes = 'recipes/complexSearch';
  private urlRecipeInfo = '/recipes';
  private newRecipe = 'mealplanner/dsky/shopping-list/items';
  constructor(private apiService: ApiService) {}
  getRecipes() {
    return this.apiService.getHttp(this.urlRecipes);
  }

  getRecipeInformation(recipeId: number) {
    return this.apiService.getHttp(
      `${this.urlRecipeInfo}/${recipeId}/information`
    );
  }

  defineRecipe(recipe: { title: string }) {
    return this.apiService.postHttp(this.newRecipe, {
      item: '1 package baking powder',
      aisle: 'Baking',
      parse: true,
    });
  }
}
