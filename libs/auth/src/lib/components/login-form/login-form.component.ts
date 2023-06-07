import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// models
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() handleSubmit = new EventEmitter<Authenticate>();
  submittedStatus = false;
  formGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  /**
   * login
   * @param authentication
   */
  login() {
    this.submittedStatus = true;
    console.log('ere', this.submittedStatus, this.formGroup);
    const { valid, value } = this.formGroup;
    if (valid) {
      this.handleSubmit.emit(value as Authenticate);
      this.submittedStatus = false;
    }
  }
}
