import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { CartItem } from '../model/cart-item';
import { CommonModule } from '@angular/common';
import { Order } from '../model/order';
import { CartService } from '../services/cart.service';
import { CartToOrderService } from '../services/cart-to-order.service';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails: CartItem[] = []; 
  totalPrice: number = 0; 
  private cartService: CartService = inject(CartService);


  constructor(private router: Router, 
    private orderService: OrderService, 
    private authService: AuthService,
    private cartToOrderService: CartToOrderService) {}

  /*ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    //if (navigation && navigation.extras.state && navigation.extras.state['orderDetails']) {
      if (navigation && navigation.extras.state) {
      this.orderDetails = navigation.extras.state['orderDetails'];
      this.calculateTotalPrice();
    } else {
      console.error('No order details found!');
    }
  }*/
    ngOnInit() {
      this.orderDetails = this.cartToOrderService.getOrderDetails(); // Get order details from the service
      this.calculateTotalPrice();
    }

  calculateTotalPrice() {
    this.totalPrice = this.orderDetails.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  confirmOrder() {
    const userId = this.authService.userSubject.value?.uid; // Get the current user's ID
    const amount = this.totalPrice; // Total price of the order
    const orderId = this.generateOrderId(); //generate a unique order ID
    const orderDate = new Date(); 
    const order = new Order(orderId, userId, this.orderDetails, amount, orderDate); // Create an order instance

    if (userId) {
      this.orderService.addOrder(userId, amount, this.orderDetails).subscribe({
        next: () => {
          console.log('Order confirmed successfully!');
          this.router.navigate(['/']); // Navigate back to home or any other page
        },
        error: (error) => {
          console.error('Error confirming order: ', error);
        }
      });
    } else {
      console.error('User is not logged in, cannot confirm order.');
      this.router.navigate(['/login']);
    }
  }

  private generateOrderId(): string {
    // Implement your logic to generate a unique order ID
    return 'ORDER_' + Math.random().toString(36).substr(2, 9);
  }
}