import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgIf],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product?: Product;
  @Output() addToCart = new EventEmitter<Product>(); 
  constructor(private router: Router) {}

  navigateToDetails() {
    if (this.product) {
      this.router.navigate(['/details', this.product.id]);
    }
  }

  onAddToCart() {
    if (this.product) {
      this.addToCart.emit(this.product); 
    }
  }
}
  /*public cartService = inject(CartService);

  addToCart() {
    if (this.product) {
      this.cartService.addProduct(this.product, 1);
    }
  }*/











//@Output() addProductEvent = new EventEmitter<Product>();
  /*addProductToCart() {
    this.addProductEvent.emit(this.product); // Emit the whole product
  }*/
  //addProductToCart() {
    //const quantity = 1; 
    //this.cartService.addProduct(this.product, quantity); 
  //}