import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipes.service';
import { ApiService } from '../shared/api.shared.service';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"
import { IRecipe } from '../cores/recipe.mode';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: { title: string; image: string; id: number }[] = [];
  filterText ="";
  loading=false;
  currentDate = new Promise(resolve=>{
    setTimeout(()=>{
      resolve(new Date())
    },3000)
  })
  constructor(
    private recipeService: RecipeService,
    private apiService: ApiService,
    private http:HttpClient
  ) {}

  customColumn() {
    const recipesLength = this.recipes.length;
    const columns = Math.ceil(recipesLength / 12);
    return `col-md-${columns}`;
  }

  onCreatePostData(){
    this.http.post("https://ng-angulare-default-rtdb.firebaseio.com/post.json", this.recipes).subscribe();
  }
   onFetchData(){
     this.loading = true;
     this.http.get<{[key:string]:IRecipe}>("https://ng-angulare-default-rtdb.firebaseio.com/post.json").pipe(
       map(responseData=>{
         const resultArray: IRecipe[] = [];
         for(const key in responseData){
           if(responseData.hasOwnProperty(key)){
             resultArray.push({ ...responseData[key],id:key})
           }
         }
         return resultArray;
       }
      )).subscribe(data=>this.loading = false)
  }
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data: any) => {
      this.recipes = data['results'];
      this.apiService.fetchStatus.next('Fetched');
    });
  }
}
