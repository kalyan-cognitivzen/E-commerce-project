import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addProductData = new FormGroup({
    pname: new FormControl('', [Validators.required]),
    pprice: new FormControl('', [Validators.required]),
    pcategory: new FormControl('', [Validators.required]),
    pcolor: new FormControl('', [Validators.required]),
    pdescription: new FormControl('', [Validators.required]),
    pimage: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {
    this.addProductData;
  }

  formData(data: any) {
    this.ValidateForm(this.addProductData);
    console.log(data);
    this.addProductData.reset();
  }
  ValidateForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.ValidateForm(control); //{6}
      }
    });
  }
}
