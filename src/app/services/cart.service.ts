import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new Cart();

  getCart(){
    return this.cart;
  }
  
  getCartItems() {
    return this.cart.getItems();
  }

  addProduct(product: Product, quantity: number) {
    this.cart.addProduct(product, quantity);
  }

  removeProduct(productId: number) {
    this.cart.removeProduct(productId);
  }

  getTotalQuantity() {
    return this.cart.getTotalQuantity();
  }

  clearCart(): void {
    this.cart = new Cart();
  }

  getTotalPrice(): number {
    return this.cart.getTotalPrice();
  }

}