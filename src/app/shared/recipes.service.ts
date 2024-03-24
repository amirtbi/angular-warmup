import { Injectable } from '@angular/core';
import { ApiService } from './api.shared.service';
import { HttpClient } from '@angular/common/http';
import { SupbaseService } from './supabase.service';
import { catchError, from, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private urlRecipes = 'recipes/complexSearch';
  private urlRecipeInfo = '/recipes';

  constructor(
    private router: Router,
    private supabaseService: SupbaseService,
    private apiService: ApiService,
    private http: HttpClient
  ) { }
  getRecipes() {
    return from(
      this.supabaseService.supabase.from('recipe').select('*')
    ).pipe(
      map(response => {
        if (response.error) {
          throw new Error("something went wrong")
        }
        return response.data
      }),
      catchError(response => {
        let error = "An unknown error happened";
        console.warn("error", response)
        if (response.error.message) {
          return throwError(() => { new Error(error) })
        }
        return throwError(() => { new Error(error) })
      }),
    )
  }

  getRecipeInformation(recipeId: number) {
    return this.apiService.getHttp(
      `${this.urlRecipeInfo}/${recipeId}/information`
    );
  }

  findSimilarRecipe(recipeId: string) {
    return this.apiService.getHttp(`recipes/${recipeId}/similar`);
  }

  addRecipe(recipe: { title: string; imageSrc: string; imageType: string }) {
    from(
      this.supabaseService.supabase.from('recipe').insert([{ ...recipe }])
    ).subscribe((data) => {
      console.warn('recipe added...');
      this.router.navigate(['/recipes']);
    });
  }
}
