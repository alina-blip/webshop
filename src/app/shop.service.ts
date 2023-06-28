import { Injectable } from '@angular/core';
import { Original } from './original.service';

export interface Product {
  original: Original;
  inventory_count: number;
  cart_count: number;
}

export interface Cart {
  items: Product[];
  total: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  items: Product[] = [];
  cart: Cart = {
    items: [],
    total: 0,
    date: '',
  };

  addToCart(original: Original) {
    const product: Product = {
      original: original,
      inventory_count: 1,
      cart_count: 1,
    };
    if (this.isNameInCart(product)) {
      this.sumCount(product);
    } else {
      this.items = [...this.items, product];
      console.log(this.items);
      return;
    }
  }
  calculateTotal() {
    this.cart.total = this.items.reduce(
      (total, item) => total + item.original.price * item.cart_count,
      0
    );
    console.log(this.cart);
    this.saveCart();
  }

  getItems() {
    return this.items;
  }

  clearCart(product: Product) {
    this.items = this.items
      .map((item) => {
        if (
          item.original.title === product.original.title &&
          item.cart_count > 0
        ) {
          return { ...item, cart_count: (item.cart_count = 0) };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.cart_count !== 0);
    this.calculateTotal();
    this.saveCart();
    console.log(this.items);
  }
  decrementCount(product: Product) {
    this.items = this.items
      .map((item) => {
        if (
          item.original.title === product.original.title &&
          item.cart_count > 0
        ) {
          return { ...item, cart_count: item.cart_count - 1 };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.cart_count !== 0);
    this.calculateTotal();
    this.saveCart();
    console.log(this.items);
  }

  incrementCount(product: Product) {
    this.items = this.items
      .map((item) => {
        if (
          item.original.title === product.original.title &&
          item.cart_count > 0
        ) {
          return { ...item, cart_count: item.cart_count + 1 };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.cart_count !== 0);
    this.calculateTotal();
    this.saveCart();
    console.log(this.items);
  }
  isNameInCart(product: Product) {
    return this.items.some(
      (item) => product.original.title === item.original.title
    );
  }
  sumCount(product: Product) {
    this.items = this.items.map((item) => {
      if (
        item.original.title === product.original.title &&
        item.original.price > 0
      ) {
        return { ...item, cart_count: item.cart_count + product.cart_count };
      } else {
        return item;
      }
    });
  }

  saveCart() {
    this.cart.items = this.items;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.items = this.cart.items;
    }
  }
}
