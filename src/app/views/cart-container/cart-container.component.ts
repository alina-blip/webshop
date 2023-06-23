import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../../components/cart/cart.component';
import { ShopService } from '../../shop.service'
import { Original } from '../../original.service'

@Component({
  selector: 'elw-cart-container',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent {

  constructor (private shopService: ShopService) {}

  get items(): Original[] {
    return this.shopService.items;
  }
}
