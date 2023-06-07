import { Component } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
import { AuthState } from '@demo-app/auth';
import * as AuthActions from '@demo-app/auth';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer-portal';

  constructor(private store: Store<AuthState>) {
    const user = localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      this.store.dispatch(AuthActions.loginSuccess(userObj));
    }
  }
}
