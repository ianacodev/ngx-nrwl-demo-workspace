import { Route } from '@angular/router';
// auth routes
import { authRoutes } from '@demo-app/auth';
// guards
import { authGuard } from '@demo-app/auth';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@demo-app/products').then((m) => m.ProductsModule),
  },
  {
    path: 'auth',
    children: authRoutes,
  },
];
