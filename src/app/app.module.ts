import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {ProductService} from "./service/product.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductCreateComponent } from './product/product-create/product-create.component';
// import {findFlatIndexEntryPoint} from "@angular/compiler-cli/src/ngtsc/entry_point";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
