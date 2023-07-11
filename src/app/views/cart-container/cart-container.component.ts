import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CartComponent } from '../../components/cart/cart.component';
import { Cart, Product, ShopService } from '../../shop.service'

@Component({
  selector: 'elw-cart-container',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent implements OnInit{

  constructor (private shopService: ShopService) {
  }

  get items(): Product[] {
    this.shopService.loadCart();
    return this.shopService.getItems();
  }

  get cart(): Cart {
    return this.shopService.cart;
  }

  clearCart(product: Product) {
    this.shopService.clearCart(product);
  }
  decrementCount(product: Product) {
    this.shopService.decrementCount(product);
  }
  incrementCount(product: Product) {
    this.shopService.incrementCount(product);
  }

  ngOnInit () {
    this.shopService.loadCart();
    console.log(this.items);
  }
}
