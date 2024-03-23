import { NgFor } from '@angular/common';
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
  submitted = false;
  constructor(private recipeService: RecipeService) {}
  submitForm(formRef: NgForm) {
    this.recipeService.addRecipe({
      ...formRef.form.value,
      imageType: 'jpg',
      date: new Date().toDateString(),
    });
    this.submitted = true;
    this.resetForm();
  }
  resetForm() {
    this.formRef.reset();
  }
}
