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

  /**
   * login
   */
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: ({ payload }) => {
          return this.authService
            .login(payload)
            .pipe(map((user) => AuthActions.loginSuccess({ payload: user })));
        },
        onError: (action, error) => {
          return AuthActions.loginFailure(error);
        },
      })
    )
  );

  /**
   * navigate to profile
   */
  navigateToProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map((action) => action),
        tap(() => this.router.navigate(['/products']))
      ),
    {
      dispatch: false,
    }
  );
}
