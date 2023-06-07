import { Component, OnInit } from '@angular/core';
import { filter, tap, take } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import { AuthState } from '@demo-app/auth';
import * as AuthActions from '@demo-app/auth';
// models
import { User } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store
      .pipe(
        select((state) => state.auth.user),
        take(1),
        filter((user) => !!user),
        tap((user) =>
          this.store.dispatch(
            AuthActions.loginSuccess({ payload: user as User })
          )
        )
      )
      .subscribe();
  }
}
