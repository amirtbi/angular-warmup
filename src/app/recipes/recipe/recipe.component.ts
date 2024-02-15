import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  @Input('title') title: string = '';
  @Input('image') imgPath: string = '';
  @Input('id') id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  showDetail(recipeId: number) {
    this.router.navigate(['/recipe-detail', recipeId], {
      relativeTo: this.route,
    });
  }
}
