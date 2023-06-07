import { Component, Input, Output, EventEmitter } from '@angular/core';
// models
import { Product } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: Product[] | null = [];
  @Output() filter = new EventEmitter<string>();

  /**
   * on filter
   * @param category
   */
  onFilter(category: string) {
    this.filter.emit(category);
  }
}
