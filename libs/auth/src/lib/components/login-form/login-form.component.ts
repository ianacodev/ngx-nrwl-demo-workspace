import { Component, Output, EventEmitter } from '@angular/core';
// models
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() handleSubmit = new EventEmitter<Authenticate>();

  /**
   * login
   * @param authentication
   */
  login(authenticate: Authenticate) {
    this.handleSubmit.emit(authenticate);
  }
}
