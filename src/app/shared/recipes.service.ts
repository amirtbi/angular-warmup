import { Injectable } from '@angular/core';
import { ApiService } from './api.shared.service';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private urlRecipes = 'recipes/complexSearch';
  private urlRecipeInfo = '/recipes';

  constructor(private apiService: ApiService) {}
  getRecipes() {
    return this.apiService.getHttp(this.urlRecipes);
  }

  getRecipeInformation(recipeId: number) {
    return this.apiService.getHttp(
      `${this.urlRecipeInfo}/${recipeId}/information`
    );
  }

  findSimilarRecipe(recipeId: string) {
    return this.apiService.getHttp(`recipes/${recipeId}/similar`);
  }
}
