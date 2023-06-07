import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';
import { User } from '@demo-app/data-models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthData {
  user: User | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export interface AuthState {
  readonly auth: AuthData;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthData = {
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    user: action.payload,
    loading: false,
    loaded: true,
  })),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    user: null,
    loading: false,
    loaded: false,
  }))
);
