import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipes.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  foundRecipe: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = param['id'];
      this.recipeService.getRecipeInformation(+id).subscribe((data: any) => {
        this.foundRecipe = data;
      });
    });
  }
}
