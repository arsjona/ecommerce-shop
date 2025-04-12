import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Order } from "./shared/order";
import { ORDERS } from "./shared/mock-order";

@Injectable()
export class OrderService {
 
  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}
