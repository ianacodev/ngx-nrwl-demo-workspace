import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// ngrx
import { Store, select } from '@ngrx/store';
import * as ProductsActions from '../../+state/products.actions';
import { ProductsState } from '../../+state/products.reducer';
import { productsQuery } from './../../+state/products.selectors';
// models
import { Product } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private router: Router, private store: Store<ProductsState>) {}

  ngOnInit() {
    // dispatch
    this.store.dispatch(ProductsActions.loadProducts());
    // select
    this.products$ = this.store.pipe(select(productsQuery.getProducts));
  }

  /**
   * update url filters
   */
  updateUrlFilters(category: string) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { category },
    };
    this.router.navigate([`/products`], navigationExtras);
  }
}
