import { Route } from '@angular/router';
// components
import { LoginComponent } from './containers/login/login.component';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];
