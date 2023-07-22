import { Injectable } from '@angular/core';
import { Original, OriginalService } from './original.service';

export interface Product {
  original: Original;
  cart_count: number;
}

export interface Cart {
  items: Product[];
  total: number;
  date: string;
  items_total: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private originalService: OriginalService) {}
  items: Product[] = [];
  cart: Cart = {
    items: [],
    total: 0,
    date: '',
    items_total: 0,
  };

  addToCart(original: Original) {
    const product: Product = {
      original: original,
      cart_count: 1,
    };
    if (this.isIdInCart(product)) {
      this.sumCount(product);
      this.calculateQuantity(product);
    } else {
      this.items = [...this.items, product];
      this.calculateQuantity(product);
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
        if (item.original.id === product.original.id && item.cart_count > 0) {
          return { ...item, cart_count: (item.cart_count = 0) };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.cart_count !== 0);
    this.calculateTotal();
    this.calculateItemsTotal();
    this.saveCart();
    console.log(this.items);
  }
  decrementCount(product: Product) {
    this.items = this.items
      .map((item) => {
        if (item.original.id === product.original.id && item.cart_count > 0) {
          return { ...item, cart_count: item.cart_count - 1 };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.cart_count !== 0);
    this.calculateTotal();
    this.calculateItemsTotal();
    this.saveCart();
    console.log(this.items);
  }
  incrementCount(product: Product) {
    this.items = this.items
      .map((item) => {
        if (item.original.id === product.original.id && item.cart_count > 0) {
          return { ...item, cart_count: item.cart_count + 1 };
        } else {
          return item;
        }
      })
      .filter((item: Product) => item.cart_count !== 0);
    this.calculateTotal();
    this.calculateItemsTotal();
    this.saveCart();
    console.log(this.items);
  }
  isIdInCart(product: Product) {
    return this.items.some((item) => product.original.id === item.original.id);
  }
  sumCount(product: Product) {
    this.items = this.items.map((item) => {
      if (item.original.id === product.original.id && item.original.price > 0) {
        return { ...item, cart_count: item.cart_count + product.cart_count };
      } else {
        return item;
      }
    });
  }
  calculateQuantity(product: Product) {
    this.items = this.items.map((item) => {
      if (
        item.original.id === product.original.id &&
        item.original.price >= 0
      ) {
        const updatedQuantity = product.original.quantity - product.cart_count;

        this.originalService.updateOriginal({
          ...product.original,
          quantity: product.original.quantity - product.cart_count,
        });

        return {
          ...item,
          original: {
            ...item.original,
            quantity: updatedQuantity,
          },
        };
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
  calculateItemsTotal(){
    this.cart.items_total = this.items.reduce(
      (items_total, items) => items_total + items.cart_count,
      0
    );
    this.saveCart();
  }
}
