import { Component, ChangeDetectionStrategy } from '@angular/core';
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
  constructor(private authService: AuthService) {}

  /**
   * login
   * @param authenticate
   */
  login(authenticate: Authenticate) {
    console.log(authenticate);
    this.authService.login(authenticate).subscribe();
  }
}
