import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from "../model/product";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;
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
}