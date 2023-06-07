import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthActionTypes } from './auth.actions';
import { fetch } from '@nx/angular';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// services
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: (action) => {
          return this.authService
            .login(action.payload)
            .pipe(map((payload) => AuthActions.loginSuccess({ payload })));
        },
        onError: (action, error) => {
          return AuthActions.loginFailure(error);
        },
      })
    )
  );

  navigateToProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.LoginSuccess),
        map((action: AuthActionTypes.LoginSuccess) => action),
        tap(() => this.router.navigate(['/products']))
      ),
    { dispatch: false }
  );
}
