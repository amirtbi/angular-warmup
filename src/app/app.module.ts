import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookingComponent } from './Shopping/booking.component';
import { RecipeComponent } from './Recipe/recipe.component';
import { BaseHeaderComponent } from './BaseHeader/baseheader.component';
import { RecipeListComponent } from './Recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './Shopping/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './Recipe/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    RecipeComponent,
    BaseHeaderComponent,
    BookingComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
