import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class NewRecipeFormComponent {
  @ViewChild('formRef') formRef: NgForm;
  user = {
    email: '',
    password: '',
    gender: '',
  };
  submitted = false;
  genders = ['male', 'female'];
  submitForm() {
    this.formRef.form.patchValue({ password: 'amirs' });
    this.user.email = this.formRef.value.email;
    this.user.password = this.formRef.value.password;
    this.user.gender = this.formRef.value.gender;
    this.submitted = true;
    console.log('formref', this.formRef);
  }
  resetForm() {
    this.formRef.reset();
  }
}
