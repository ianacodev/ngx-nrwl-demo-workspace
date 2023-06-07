import { Component, ChangeDetectionStrategy } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';
import * as authActions from '../../+state/auth.actions';
// services
import { AuthService } from '../../services/auth.service';
// models
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private store: Store<AuthState>
  ) {}

  /**
   * login
   * @param authenticate
   */
  login(authenticate: Authenticate) {
    this.store.dispatch(authActions.login({ payload: authenticate }));
  }
}
