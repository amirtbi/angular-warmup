import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipes.service';
import { ApiService } from '../shared/api.shared.service';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { IRecipe } from '../cores/recipe.mode';
import { SupbaseService } from '../shared/supabase.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: IRecipe[] = [];
  filterText = "";
  loading = false;
  error:null;
  currentDate = new Promise(resolve => {
    setTimeout(() => {
      resolve(new Date())
    }, 3000)
  })

  constructor(
    private recipeService: RecipeService,
    private apiService: ApiService,
    private http: HttpClient,
    private supabaseService:SupbaseService
  ) { }

  customColumn() {
    const recipesLength = this.recipes.length;
    const columns = Math.ceil(recipesLength / 12);
    return `col-md-${columns}`;
  }

  onCreatePostData() {
    this.http.post("https://ng-angulare-default-rtdb.firebaseio.com/post.json", this.recipes).subscribe();
  }
  onFetchData() {
    this.loading = true;
    this.http.get<{ [key: string]: IRecipe }>("https://ng-angulare-default-rtdb.firebaseio.com/post.json").
    pipe(
      map(responseData => {
        const resultArray: IRecipe[] = [];
        console.log("response",responseData)
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            console.log(responseData[key])
            resultArray.push(responseData[key])
          }else{
            resultArray.push(responseData[key])
          }
        }
      
        return resultArray;
      }
      )).subscribe((data:any) => {
        this.recipes = data[0];
        this.loading = false;
        console.warn("recipes",this.recipes)
      })
  }
   ngOnInit() {
     this.recipeService.getRecipes().subscribe({
      next:(data:any)=>{console.warn("error",data);this.recipes = data;},
      error:(error:any)=>this.error = error,
      complete:()=>console.log("completed...")
     });
    // load data from firebase
    // this.onFetchData();
    // Load from api directly
    // this.recipeService.getRecipes().subscribe((data: any) => {
    //   this.recipes = data['results'];
    //   this.apiService.fetchStatus.next('Fetched');
    // });
  }
}
