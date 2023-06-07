import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// models
export { Authenticate } from './authenticate';
export { User } from './user';
export { Product } from './product';

@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
