import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "product", children: [
      {path: "", component: ProductListComponent},
      {path: "create", component: ProductCreateComponent},
      {path: "delete/:id", component: ProductDeleteComponent},
      {path: ":id", component: ProductDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
