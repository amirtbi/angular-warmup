import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeSimilarComponent } from './recipes/similar-recipe/similar-recipe.component';
import { ShoppingListItems } from './shopping-list/shopping-list-items/shopping-list-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { canActivateRoute } from './shared/router-guard.service';
import { resolveRecipeDetail } from './recipes/recipe-details/recipe.details.resolver';
import { shoppingListItemsResolver } from './shopping-list/shopping-list-items/shopping-list-items.resolver';
import { NewRecipeFormComponent } from './recipes/new-recipe/recipe.form.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'add-recipe',
    component: NewRecipeFormComponent,
    canActivate: [canActivateRoute],
  },
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'recipe-detail/:id',
    component: RecipeDetailsComponent,
    resolve: { details: resolveRecipeDetail },
    children: [{ path: 'similar', component: RecipeSimilarComponent }],
  },
  { path: 'similar-recipe', component: RecipeSimilarComponent },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    canActivate: [canActivateRoute],
    resolve: { items: shoppingListItemsResolver },
    children: [
      {
        path: 'items',
        component: ShoppingListItems,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouteModules {}
