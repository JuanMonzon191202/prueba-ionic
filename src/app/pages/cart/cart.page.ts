import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
    this.items = this.cartService.getCart();
  }
}
