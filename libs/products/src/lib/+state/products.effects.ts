import { Injectable } from '@angular/core';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, mergeMap, map, filter } from 'rxjs';
import * as ProductsActions from './products.actions';

// service
import { ProductsService } from '../services/products/products.service';
// models
import { Product } from '@demo-app/data-models';

@Injectable()
export class ProductsEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productsService
          .getProducts()
          .pipe(
            map((products: Product[]) =>
              ProductsActions.loadProductsSuccess({ payload: products })
            )
          )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductsActions.loadProductsFail({ error }));
      })
    )
  );

  loadFilteredProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) =>
        r.payload.routerState.url.startsWith('/products')
      ),
      map(
        (r: RouterNavigationAction) =>
          r.payload.routerState.root.queryParams['category']
      ),
      mergeMap((category: string) =>
        this.productsService
          .getProducts(category)
          .pipe(
            map((products: Product[]) =>
              ProductsActions.loadProductsSuccess({ payload: products })
            )
          )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductsActions.loadProductsFail({ error }));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
