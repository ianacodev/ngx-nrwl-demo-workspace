import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// components
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule, HttpClientModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
