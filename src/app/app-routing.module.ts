import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";

const routes: Routes = [

  {
    path: "product",children: [
      {path: "", component: ProductListComponent},
      {path: "create", component: ProductCreateComponent},
      {path: "delete/:id", component: ProductDeleteComponent},
      {path: ":id", component: ProductDetailComponent},
      {path: "edit/:id", component: ProductEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
