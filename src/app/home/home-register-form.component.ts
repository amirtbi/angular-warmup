import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './userRegister.model';
import {
  AbstractControl,
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../shared/api.shared.service';
import { CustomValidatorsFn } from '../cores/validators/validators';
@Component({
  selector: 'user-form',
  templateUrl: './home-register-form.component.html',
  styleUrls: ['./home-register-form.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerUserForm: FormGroup;
  formIsCorrect = true;
  passwordRegex = new RegExp(
    '^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?d)(?=.*?[W_]).{8,}$'
  );
  validatorFn = new CustomValidatorsFn();
  user = new User({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });
  constructor(private apiSevrice: ApiService) {
    this.createFormControls();
  }

  createFormControls(){
  this.registerUserForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.validatorFn.spaceNotAllowed.bind(this),
        ]),
        firstname: new FormControl(null, [Validators.required,this.validatorFn.forBiddenNameLength.bind(this)]),
        lastname: new FormControl(null, [Validators.required,this.validatorFn.forBiddenNameLength]),
      }),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
      }),
      email: new FormControl(null, [
        Validators.required,
        this.validatorFn.emailPattern.bind(this),
      ], this.validatorFn.forBiddenEmails),
      hobbies: new FormArray([]),
    });
  }
  submitForm() {
    if (!this.registerUserForm.valid) {
      this.formIsCorrect = false;
    } else {
      this.formIsCorrect = true;
      // this.registerUserForm.reset();
    }
    console.warn(this.registerUserForm);

    // this.apiSevrice.postHttp('users/connect', this.user).subscribe((data) => {
    //   console.warn('subscirbed', data);
    // });
  }

  ngOnInit(): void {}
  hobbies(): FormArray {
    return this.registerUserForm.get('hobbies') as FormArray;
  }

  addressIsNotValid() {
    if (
      (this.registerUserForm.get('address.street')?.errors?.['required'] ||
        this.registerUserForm.get('address.city')?.errors?.['required']) &&
      this.registerUserForm.get('address')?.touched
    ) {
      return true;
    }
    return false;
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (this.registerUserForm.get('hobbies') as FormArray).push(control);
  }
}
