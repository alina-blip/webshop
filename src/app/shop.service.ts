import { Injectable } from '@angular/core';
import { Original } from './original.service'

export interface Product {
  original: Original;
  inventory_count: number;
  cart_count: number;
  date_of_purchase: string;
  category: Category;
}

export enum Category {
  ORIGINAL,
  PRINT,
  STICKER,
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  items: Original[] = [];

  addToCart(original: Original) {
    if (this.isNameInCart(original)) {
      // this.sumCount(original);
    } else {
      this.items = [...this.items, original];
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

  isNameInCart(original: Original) {
    return this.items.some((item) => original.title === item.title);
  }
  // sumCount(original: Original) {
  //   this.items = this.items.map((item) => {
  //     if (item.title === original.title && item.cart_count > 0) {
  //       return { ...item, count: item.cart_count + original.cart_count };
  //     } else {
  //       return item;
  //     }
  //   });
  // }
}
