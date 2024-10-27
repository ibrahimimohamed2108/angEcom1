import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

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
  cartService: any;

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.params['id'], 10);
    this.productService.getAllProducts().subscribe((response: any) => {
      const products = response.products as Product[]; 
      this.product = products.find((p: Product) => p.id === productId);
    });
  }
  addToCart() {
    if (this.product) {
      this.cartService.addProduct(this.product, 1);
    }
  }
}
