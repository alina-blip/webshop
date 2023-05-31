import { Injectable } from '@angular/core';
import { Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  items: Product[] = [];

  addToCart(product: Product) {
    if (this.isNameInCart(product)) {
      this.sumCount(product);
    } else {
      this.items = [...this.items, product];
      console.log(this.items);
      return;
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  decrementCount(product: Product) {
    this.items = this.items
      .map((item) => {
        if (item.name === product.name && item.count > 0) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.count !== 0);
    console.log(this.items);
  }
  isNameInCart(product: Product) {
    return this.items.some((item) => product.name === item.name);
  }
  sumCount(product: Product) {
    this.items = this.items.map((item) => {
      if (item.name === product.name && item.count > 0) {
        return { ...item, count: item.count + product.count };
      } else {
        return item;
      }
    });
  }


}
