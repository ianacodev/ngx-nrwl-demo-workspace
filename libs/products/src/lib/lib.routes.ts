import { Route } from '@angular/router';
// components
import { ProductsComponent } from './containers/products/products.component';

export const productsRoutes: Route[] = [
  { path: '', component: ProductsComponent },
];
