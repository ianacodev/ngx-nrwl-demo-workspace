import { createAction, props } from '@ngrx/store';
// models
import { Product } from '@demo-app/data-models';

export enum ProductsActionTypes {
  LoadProducts = '[Products Page] Load Products',
  LoadProductsSuccess = '[Products API] Load Products Success',
  LoadProductsFail = '[Products API] LoadProducts Fail',
}

export const loadProducts = createAction(ProductsActionTypes.LoadProducts);

export const loadProductsSuccess = createAction(
  ProductsActionTypes.LoadProductsSuccess,
  props<{ payload: Product[] }>()
);

export const loadProductsFail = createAction(
  ProductsActionTypes.LoadProductsFail,
  props<{ error: any }>()
);