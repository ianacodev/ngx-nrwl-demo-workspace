import { Route } from '@angular/router';
// auth routes
import { authRoutes } from '@demo-app/auth';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    children: authRoutes,
  },
];
