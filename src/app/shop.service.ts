import { Injectable } from '@angular/core';

export interface Product {
  id: string | '1';
  title: string | 'name';
  size: string;
  material: string;
  description: string;
  price: number | 5;
  image_url: string | 'url';
  inventory_count: number;
  cart_count: number;
  date: string;
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

  isNameInCart(product: Product) {
    return this.items.some((item) => product.title === item.title);
  }
  sumCount(product: Product) {
    this.items = this.items.map((item) => {
      if (item.title === product.title && item.cart_count > 0) {
        return { ...item, count: item.cart_count + product.cart_count };
      } else {
        return item;
      }
    });
  }
}
