import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// services
import { AuthService } from '../../services/auth.service';

export function authGuard(): Observable<boolean> {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.user$.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigate([`/auth/login`]);
        return false;
      }
    })
  );
}
