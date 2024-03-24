import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { RecipeService } from 'src/app/shared/recipes.service';
import { SupbaseService } from 'src/app/shared/supabase.service';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class NewRecipeFormComponent implements OnInit {
  @ViewChild('formRef') formRef: NgForm;
  submitted = false;
  constructor(private recipeService: RecipeService, private authService: AuthService, private router: Router) { }
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
  ngOnInit(): void {
  }
}
