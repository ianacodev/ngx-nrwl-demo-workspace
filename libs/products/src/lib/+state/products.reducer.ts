import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ProductsActions from './products.actions';
import { Product } from '@demo-app/data-models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsData extends EntityState<Product> {
  selectedProductId?: string | number | null;
  loading: boolean;
  error?: string | null;
}

export interface ProductsState {
  readonly products: ProductsData;
}

export const productsAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>({});

export interface ProductsState {
  readonly products: ProductsData;
}

export const initialState: ProductsData = productsAdapter.getInitialState({
  error: '',
  selectedProductId: null,
  loading: false,
});

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: false,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { payload: products }) => {
    return productsAdapter.setAll(products, state);
  }),
  on(ProductsActions.loadProductsFail, (state, { error }) =>
    productsAdapter.removeAll({
      ...state,
      error,
    })
  )
);

export function reducer(state: ProductsData | undefined, action: Action) {
  return productsReducer(state, action);
}

export const getSelectedProductId = (state: ProductsData) =>
  state.selectedProductId;

export const {
  // select the array of user ids
  selectIds: selectProductIds,

  // select the dictionary of Products entities
  selectEntities: selectProductEntities,

  // select the array of Products
  selectAll: selectAllProducts,

  // select the total Products count
  selectTotal: selectProductsTotal,
} = productsAdapter.getSelectors();
