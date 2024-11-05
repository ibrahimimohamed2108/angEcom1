import { CartItem } from './cart-item'; // Assuming CartItem is your existing model

export class Order {
    orderId: string;                // Unique identifier for the order
    userId: string;                 // ID of the user who placed the order
    items: CartItem[];              // List of items in the order
    totalPrice: number;             // Total price of the order
    orderDate: Date;                // Date and time when the order was placed
    status: 'pending' | 'shipped' | 'delivered' | 'canceled'; // Current status of the order

    constructor(
        orderId: string,
        userId: string,
        items: CartItem[],
        totalPrice: number,
        orderDate: Date,
        status: 'pending' | 'shipped' | 'delivered' | 'canceled' = 'pending'
    ) {
        this.orderId = orderId;
        this.userId = userId;
        this.items = items;
        this.totalPrice = totalPrice;
        this.orderDate = orderDate;
        this.status = status;
    }
}
