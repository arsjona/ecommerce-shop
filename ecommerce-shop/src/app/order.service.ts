import { Injectable } from "@angular/core";
import { Order } from "./shared/order";
import { ORDERS } from "./shared/mock-order";
import { BehaviorSubject,Observable } from "rxjs";

@Injectable({ 
  providedIn: 'root'
})
export class OrderService {
 
  private orders: Order[] = ORDERS; // Initialize with mock data
  constructor() {
    if (!localStorage.getItem("orders")) {
      localStorage.setItem("orders", JSON.stringify([])); // Empty array initially
    }
  }

  private getOrdersFromStorage(): Order[] {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  }

  private saveOrdersToStorage(orders: Order[]): void {
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  // Get all orders
  getOrders(): Order[] {
    return this.getOrdersFromStorage();
  }

  addOrder(newOrder: Order): void {
    const orders = this.getOrdersFromStorage();
    orders.push(newOrder);
    this.saveOrdersToStorage(orders); // Save updated orders back to localStorage
    console.log("Updated Orders:", orders); // Log the updated orders
  }
  private product = {
    color: '',
    size: '',
    price: ''
  };
  

  setProduct(product: { color: string; size: string; price: string }) {
    this.product = product;
  }
  getProduct() {
    return this.product;
  }
  updateOrders(orders: Order[]): void {
    this.saveOrdersToStorage(orders);
  

  }


}

