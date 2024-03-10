import { Injectable } from '@angular/core';
import { ApiService } from './api.shared.service';
import { HttpClient } from '@angular/common/http';
import { SupbaseService } from './supabase.service';
import { from, map,catchError,throwError } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private urlRecipes = 'recipes/complexSearch';
  private urlRecipeInfo = '/recipes';

  constructor(private router:Router ,private supabaseService:SupbaseService ,private apiService: ApiService,private http:HttpClient) {}
  getRecipes() {
    const data$ = from(this.supabaseService.supabase
      .from('recipe')
      .select('*'))
      .pipe(map(response => {
        console.log("respo",response)
        if (response.error) {
          throw new Error(response.error.message)
        }
        return response.data;
      }));

      return data$;
    // return this.apiService.getHttp(this.urlRecipes);
  }

  getRecipeInformation(recipeId: number) {
    return this.apiService.getHttp(
      `${this.urlRecipeInfo}/${recipeId}/information`
    );
  }

  findSimilarRecipe(recipeId: string) {
    return this.apiService.getHttp(`recipes/${recipeId}/similar`);
  }

  addRecipe(recipe:{title:string,imageSrc:string,imageType:string}){
    from(this.supabaseService.supabase.from('recipe').insert([{ ...recipe }])).subscribe(data => {
      
      console.warn("recipe added...");
      this.router.navigate(['/recipes']);
  });

    // this.http.post("https://ng-angulare-default-rtdb.firebaseio.com/post.json",recipe).subscribe(data=>console.log("data",data));
  }
}
