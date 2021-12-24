import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductForm: FormGroup | any;
  product: any
  id: string | null | undefined;

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    let product = this.productService.getById(this.id)
    this.editProductForm = this.fb.group({
      // @ts-ignore
      id: [product.id],
      // @ts-ignore
      name: [product.name],
      // @ts-ignore
      price: [product.price],
      // @ts-ignore
      description: [product.description],
    })
  }
  submitEdit(id: any) {
    let product = this.editProductForm?.value
    this.productService.edit(id, product)
    this.router.navigate(["product"])
  }


}
