import { CartItem } from "./cart-item";
import { Product } from "./product";

export class Cart {
    private items: Map<number, CartItem>;

    constructor() {
        this.items = new Map<number, CartItem>();
    }

    getItems(): CartItem[] {
        return Array.from(this.items.values());
    }

    addProduct(product: Product, quantity: number): void {
        const existing = this.items.get(product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.set(product.id, new CartItem(product, quantity));
        }
    }

    removeProduct(productId: number): void {
        this.items.delete(productId);
    }

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

    getTotalQuantity(): number {
        let total = 0;
        this.items.forEach(item => total += item.quantity);
        return total;
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
