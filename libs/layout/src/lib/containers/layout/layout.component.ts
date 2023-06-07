import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// services
import { AuthService } from '@demo-app/auth';
// models
import { User } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$ as Observable<User>;
  }
}