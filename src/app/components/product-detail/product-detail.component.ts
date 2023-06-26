import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { Original } from '../../original.service';
import { Product } from '../../shop.service'

@Component({
  selector: 'elw-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @Input() product: Product | null = null;
  @Input() original: Original | null = null;

  @Output() addToCart: EventEmitter<Original> = new EventEmitter<Original>();

  addToCartEmit() {
    if (this.original) {
      this.addToCart.emit(this.original);
    }
  }
}
