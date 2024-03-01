import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ApiService } from 'src/app/shared/api.shared.service';
import { RecipeService } from 'src/app/shared/recipes.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  foundRecipe: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private apiService: ApiService
  ) {}

  findSimilar() {
    this.router.navigate(['similar'], {
      relativeTo: this.route,
      queryParams: { id: this.foundRecipe.id },
    });
  }
  ngOnInit(): void {
    this.route.data.subscribe((param: Params) => {
      this.foundRecipe = param['details'];
      this.apiService.fetchStatus.next('Fetched');
    });
    // this.route.params.subscribe((param: Params) => {
    //   const id = param['id'];
    //   this.recipeService.getRecipeInformation(+id).subscribe((data: any) => {
    //     this.foundRecipe = data;
    //   });
    // });
  }
}
