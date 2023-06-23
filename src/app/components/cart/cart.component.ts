import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Original } from '../../original.service';

@Component({
  selector: 'elw-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() items: Original[] = [];
  @Output() clearCart = new EventEmitter<void>();
  @Output() decrementCount: EventEmitter<Original> =
    new EventEmitter<Original>();
  @Output() incrementCount: EventEmitter<Original> =
    new EventEmitter<Original>();

  emitClearCart() {
    this.clearCart.emit();
  }
  emitDecrementCount(original: Original) {
    this.decrementCount.emit(original);
  }

  emitIncrementCount(original: Original) {
    this.incrementCount.emit(original);
  }
}
