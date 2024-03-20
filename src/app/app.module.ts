import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeSimilarComponent } from './recipes/similar-recipe/similar-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingFormComponent } from './shopping-list/shoppingForm/shopping-form.component';
import { ShoppingListItems } from './shopping-list/shopping-list-items/shopping-list-items.component';
import { HomeComponent } from './home/home.component';
import { AppRouteModules } from './app.route.module';
import { NewRecipeFormComponent } from './recipes/new-recipe/recipe.form.component';
import { RegisterUserComponent } from './home/home-register-form.component';
import { SignUpComponent } from './auth/signUp-form/signUp-form.component';
import { SignInComponent } from './auth/singIn-form/singIn-form.component';
import { AuthComponent } from './auth/auth.component';
import { ShortenLengthPipe } from './cores/pipes/shorten.pipe';
import { FilterPipe } from './cores/pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingFormComponent,
    ShoppingListItems,
    HomeComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipeSimilarComponent,
    RecipesComponent,
    AuthComponent,
    SignUpComponent,
    RecipeComponent,
    SignInComponent,
    RecipeDetailsComponent,
    NewRecipeFormComponent,
    RegisterUserComponent,
    ShortenLengthPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModules,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
