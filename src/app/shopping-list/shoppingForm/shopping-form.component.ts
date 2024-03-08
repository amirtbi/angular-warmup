import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShoppingService } from 'src/app/shared/shopping.service';
@Component({
  selector: 'shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss'],
})
export class ShoppingFormComponent implements OnInit {
  public aisle: string = '';
  public title: string = '';
  // @ViewChild('formRef') formRef: NgForm;
  formRef: FormGroup;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.formRef = new FormGroup({
      item: new FormControl(null, Validators.required),
      aisle: new FormControl(null, Validators.required),
    });
  }
  addToShoppingList() {
    this.shoppingService.addToShoppingList({
      item: this.formRef.value.itemField,
      aisle: this.formRef.value.aisleField,
      parse: true,
    });
    this.formRef.reset();
  }
}
