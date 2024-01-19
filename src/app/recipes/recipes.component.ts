import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: { title: string; image: string; id: number }[] = [];

  constructor(private recipeService: RecipeService) {}

  customColumn() {
    const recipesLength = this.recipes.length;
    const columns = Math.ceil(recipesLength / 12);
    return `col-md-${columns}`;
  }
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data: any) => {
      this.recipes = data['results'];
      console.warn('Recipes', this.recipes);
    });
  }
}
