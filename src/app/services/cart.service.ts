import { Injectable } from '@angular/core';

export interface Product {
  amount: number;
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    // eliminar el producto del array de items
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getItems() {
    return this.items;
  }
}
