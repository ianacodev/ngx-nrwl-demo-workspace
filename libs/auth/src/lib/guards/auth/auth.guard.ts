import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';

export function authGuard(): Observable<boolean> {
  const router: Router = inject(Router);
  const store: Store<AuthState> = inject(Store);
  return store.pipe(
    select((state) => state),
    map((state) => {
      if (state.auth.user) {
        return true;
      } else {
        router.navigate([`/auth/login`]);
        return false;
      }
    })
  );
}
