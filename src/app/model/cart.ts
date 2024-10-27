import { CartItem } from './cart-item';
import { Product } from './product';

export class Cart {
  private items: Map<number, CartItem>;

  constructor() {
    this.items = new Map<number, CartItem>();
  }

  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  addProduct(product: Product, quantity: number): void {
    if (this.items.has(product.id)) {
      this.items.get(product.id)!.quantity += quantity; // Increment quantity if already in cart
    } else {
      this.items.set(product.id, { product, quantity });
    }
  }

  removeProduct(productId: number): void {
    this.items.delete(productId); 
  }

  getTotalQuantity(): number {
    let total = 0;
    this.items.forEach(item => total += item.quantity);
    return total;
  }


/////////////////////////////////////////////////

    updateQuantity(productId: number, quantity: number): void {
        const item = this.items.get(productId);
        if (item) {
            item.quantity = quantity;
        }
    }

    getItem(productId: number): CartItem | undefined {
        return this.items.get(productId);
    }

    hasProduct(productId: number): boolean {
        return this.items.has(productId);
    }

    getTotalPrice(): number {
        let total = 0;
        this.items.forEach(item => total += item.product.price * item.quantity);
        return total;
    }

    clear(): void {
        this.items.clear();
    }
}
