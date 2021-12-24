import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }
  submit() {
    let product = this.productForm.value;
    this.productService.createProduct(product);
    this.productForm.reset()
    this.router.navigate(["product"])
  }

}
