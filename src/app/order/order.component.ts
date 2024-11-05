import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { CartItem } from '../model/cart-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails: CartItem[] = []; // To hold cart items
  totalPrice: number = 0; // To calculate total price

  constructor(private router: Router, private orderService: OrderService, private authService: AuthService) {}

  ngOnInit() {
    // Retrieve the order details passed from the CartComponent
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.orderDetails = navigation.extras.state['orderDetails'];
      this.calculateTotalPrice();
    } else {
      console.error('No order details found!');
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.orderDetails.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  confirmOrder() {
    const userId = this.authService.userSubject.value?.uid; // Get the current user's ID
    const amount = this.totalPrice; // Total price of the order

    if (userId) {
      this.orderService.addOrder(userId, amount, this.orderDetails).subscribe({
        next: () => {
          console.log('Order confirmed successfully!');
          // Optionally navigate to a success page or display a message
          this.router.navigate(['/']); // Navigate back to home or any other page
        },
        error: (error) => {
          console.error('Error confirming order: ', error);
        }
      });
    } else {
      console.error('User is not logged in, cannot confirm order.');
      // Optionally redirect to the login page
      this.router.navigate(['/login']);
    }
  }
}
