import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { RecipeService } from 'src/app/shared/recipes.service';

export const resolveRecipeDetail: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const id = route.params['id'];
  const recipeService = inject(RecipeService);

  return recipeService.getRecipeInformation(id);
};
