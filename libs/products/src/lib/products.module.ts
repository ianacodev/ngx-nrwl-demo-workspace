import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';
import { ProductsComponent } from './containers/products/products.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
