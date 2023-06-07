import { Component, ChangeDetectionStrategy } from '@angular/core';
// models
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  /**
   * login
   * @param authenticate
   */
  login(authenticate: Authenticate) {
    console.log(authenticate);
  }
}
