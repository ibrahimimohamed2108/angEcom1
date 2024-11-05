import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from "../model/product";
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

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
    // Navigate to the order component and pass the cart items
    const orderDetails = this.cart.getItems(); // Get current items in the cart
    this.router.navigate(['/order'], { state: { orderDetails } }); // Pass orderDetails via state
  }

}
    //@Input() cartItem !: CartItem;
  /*addProductToCart(product: Product) {
    this.cart.addProduct(product, 1);
  }
  removeProduct(productId: number) {
    this.cart.removeProduct(productId); 
  }*/