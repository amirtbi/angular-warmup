import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe-list/model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnChanges {
  @Input('recipe') selectedRecipe: Recipe;

  ngOnChanges(changes: SimpleChanges): void {
    // Watch changes in Input
  }
}
