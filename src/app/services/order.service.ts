import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, getDoc, deleteDoc } from '@angular/fire/firestore';
import { CartItem } from '../model/cart-item';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private fireStore: Firestore) {}

  addOrder(userId: string, amount: number, details: Array<CartItem>): Observable<void> {
    const orderData = {
      userId: userId,
      amount: amount,
      dateOrder: new Date(),
      details: details
    };
    const collectionInstance = collection(this.fireStore, 'orders');
    return from(addDoc(collectionInstance, orderData).then(() => {
      console.log("Order saved successfully!");
    }).catch(error => {
      console.error("Error saving order: ", error);
    }));
  }

  getAllOrders(): Observable<any[]> {
    const collectionInstance = collection(this.fireStore, 'orders');
    return collectionData(collectionInstance, { idField: 'id' });
  }

  getOrderById(id: string): Observable<any> {
    const docInstance = doc(this.fireStore, 'orders', id);
    return from(getDoc(docInstance).then(docSnapshot => {
      if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() };
      } else {
        throw new Error("No such order!");
      }
    }));
  }

  updateOrder(id: string, updatedData: any): Observable<void> {
    const docInstance = doc(this.fireStore, 'orders', id);
    return from(updateDoc(docInstance, updatedData).then(() => {
      console.log(`Order with ID ${id} updated successfully!`);
    }).catch(error => {
      console.error("Error updating order: ", error);
    }));
  }

  deleteOrder(id: string): Observable<void> {
    const docInstance = doc(this.fireStore, 'orders', id);
    return from(deleteDoc(docInstance).then(() => {
      console.log('Order deleted successfully!');
    }).catch(error => {
      console.error("Error deleting order: ", error);
    }));
  }
}
