import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule , ProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];
  productCategories: string[] = [];
  selectedCategory: string = 'All';
  searchKey: string = '';
  productService = inject(ProductService);

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }
  loadCategories() {
    this.productService.getProductCategoryList().subscribe((categories: any ) => {
      this.productCategories = categories;
    });
  }
  loadProducts() {
    this.productService.getAllProducts().subscribe((response:any ) => {
      this.productList = response.products;
    });
  }
  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.loadProducts();
    } else {
      this.productService.getProductByCategory(this.selectedCategory).subscribe((response: any ) => {
        this.productList = response.products;
      });
    }
  }
  searchProducts() {
    if (this.searchKey) {
      this.productService.getProductByKey(this.searchKey).subscribe((response: any ) => {
        this.productList = response.products;
      });
    } else {
      this.loadProducts(); // Reload all products if search key is empty
    }
  }
}