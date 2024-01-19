import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipes/add-recipe/add-recipe.component';
import { AppRouteModules } from './app.route.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeFormComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRouteModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
