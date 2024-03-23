import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/shared/recipes.service';
import { SupbaseService } from 'src/app/shared/supabase.service';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class NewRecipeFormComponent {
  @ViewChild('formRef') formRef: NgForm;
  recipe = {
    title: '',
    imageSrc: '',
    description: '',
  };
  submitted = false;
  constructor(private recipeService: RecipeService) {}
  submitForm() {
    this.recipe.title = this.formRef.value.title;
    this.recipe.imageSrc = this.formRef.value.imageFile;
    this.recipe.description = this.formRef.value.description;
    this.recipeService.addRecipe({ ...this.recipe, imageType: 'jpg' });
    this.submitted = true;
    this.resetForm();
  }
  resetForm() {
    this.formRef.reset();
  }
}
