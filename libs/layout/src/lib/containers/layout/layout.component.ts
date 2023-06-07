import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
// services
import { AuthService } from '@demo-app/auth';
// models
import { User } from '@demo-app/data-models';
import { AuthState } from '@demo-app/auth';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    private authService: AuthService,
    private store: Store<AuthState>
  ) {}

  ngOnInit() {
    this.user$ = this.store.pipe(
      select((state) => state.auth.user),
      filter((user) => !!user)
    ) as Observable<User>;
  }
}
