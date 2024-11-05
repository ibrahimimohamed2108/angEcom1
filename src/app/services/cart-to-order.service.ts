import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartToOrderService {
  private orderDetails: CartItem[] = [];

  setOrderDetails(items: CartItem[]) {
    this.orderDetails = items;
  }

  getOrderDetails(): CartItem[] {
    return this.orderDetails;
  }

  clearOrderDetails() {
    this.orderDetails = [];
  }
}
