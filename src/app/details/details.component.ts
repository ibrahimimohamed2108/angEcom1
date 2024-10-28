import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']  
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;
  
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  cartservice = inject(CartService)
  @Output() addToCart = new EventEmitter<Product>(); 

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.params['id'], 10);
    this.productService.getAllProducts().subscribe((response: any) => {
      const products = response.products as Product[]; 
      this.product = products.find((p: Product) => p.id === productId);
    });
  }

  onAddToCart() {
    if (this.product) {
      this.addToCart.emit(this.product); 
    }
  }
  /*addToCart() {
      if (this.product) {
        this.cartservice.addProduct(this.product,1);// i want to be able to add as much as i want in the quantity of a product to the cart in the future thats why there is a quantity of 1 in the meantime
      }
  }*/


}
  //addToCart() {
    //if (this.product) {
      //this.cartService.addProduct(this.product, 1);
    //}
  //}
//}
