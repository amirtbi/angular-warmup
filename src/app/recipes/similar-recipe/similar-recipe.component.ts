import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/shared/api.shared.service';
import { RecipeService } from 'src/app/shared/recipes.service';
@Component({
  selector: 'recipe-similar',
  templateUrl: './similar-recipe.component.html',
})
export class RecipeSimilarComponent implements OnInit {
  similarRecipes: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((data: Params) => {
      this.recipeService
        .findSimilarRecipe(data['params']['id'])
        .subscribe((data: any) => {
          this.similarRecipes = data;
          this.apiService.fetchStatus.next('Fetched');
        });
    });
  }
}
