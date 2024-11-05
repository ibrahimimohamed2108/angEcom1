import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from "../model/product";
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { CartToOrderService } from '../services/cart-to-order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = new Cart(); 
  private cartService: CartService = inject(CartService);
  private cartToOrderService: CartToOrderService = inject(CartToOrderService); 


  ngOnInit() {
      this.cart = this.cartService.getCart();
    };
  
  addProductToCart(product: Product) {
    this.cartService.addProduct(product, 1); 
  }

  removeProduct(productId: number) {
    this.cartService.removeProduct(productId); 
  }
  constructor(private router: Router){}


  confirmOrder() {
    const orderDetails = this.cart.getItems(); 
    this.cartToOrderService.setOrderDetails(orderDetails); // Store order details in the service
    this.router.navigate(['/order']); // Navigate to the order component
  }
}
    
//@Input() cartItem !: CartItem;
  /*addProductToCart(product: Product) {
    this.cart.addProduct(product, 1);
  }
  removeProduct(productId: number) {
    this.cart.removeProduct(productId); 
  }*/