import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
