import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart, Product } from '../../shop.service'

@Component({
  selector: 'elw-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() items: Product[] = [];
  @Input() cart: Cart | undefined;
  @Output() clearCart: EventEmitter<Product> =
  new EventEmitter<Product>();
  @Output() decrementCount: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() incrementCount: EventEmitter<Product> =
    new EventEmitter<Product>();

  emitClearCart(product: Product) {
    this.clearCart.emit(product);
  }
  emitDecrementCount(product: Product) {
    this.decrementCount.emit(product);
  }

  emitIncrementCount(product: Product) {
    this.incrementCount.emit(product);
  }
}
