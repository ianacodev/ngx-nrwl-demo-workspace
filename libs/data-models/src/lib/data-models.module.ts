import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// models
export { Authenticate } from './authenticate';
export { User } from './user.d';

@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
