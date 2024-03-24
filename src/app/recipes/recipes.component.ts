import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipes.service';
import { ApiService } from '../shared/api.shared.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IRecipe } from '../cores/recipe.mode';
import { SupbaseService } from '../shared/supabase.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: IRecipe[] = [];
  filterText = '';
  loading = false;
  error: null;
  constructor(private recipeService: RecipeService) { }
  customColumn() {
    const recipesLength = this.recipes.length;
    const columns = Math.ceil(recipesLength / 12);
    return `col-md-${columns}`;
  }
  ngOnInit() {
    this.loading = true;
    this.recipeService.getRecipes().subscribe({
      next: (data: any) => {
        console.warn('data', data);
        this.recipes = data;
      },
      error: (error: any) => { this.error = error; console.log("Errorss", error); this.loading = false },
      complete: () => (this.loading = false),
    });
  }
}
