import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Product } from '../../shop.service'


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() items: Product[] = [];
  @Output() clearCart = new EventEmitter<void>();
  @Output() decrementCount: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() incrementCount: EventEmitter<Product> = new EventEmitter<Product>();


  emitClearCart() {
    this.clearCart.emit();
  }
  emitDecrementCount(product: Product) {
    this.decrementCount.emit(product);
  }

  emitIncrementCount(product: Product) {
    this.incrementCount.emit(product);
  }

}
