import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ordermanagement',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './ordermanagement.component.html',
  styleUrls: ['./ordermanagement.component.scss'],
})
export class OrdermanagementComponent implements OnInit {
  orders: Order[] = [];
 

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Fetch the orders from the service (which will retrieve them from localStorage)
    this.orders = this.orderService.getOrders();
  }

  addNewOrder() {

    const orderId = String(new Date().getTime());
 

    const newOrder: Order = {
      orderId: orderId,
      customerId: "3",
      orderDetails: [
        {
          productId: "3",
          orderId: orderId,
          quantity: 1,
          adresa: "Durres, Albania",
          total: 100,
          paymentMethod: 'cash',
          status: "ne pritje",
          color: "red",
          size: "M",
          price: 100
        },
      ],
    };

    this.orderService.addOrder(newOrder);  // Add the new order to the service
    this.orders = this.orderService.getOrders();  // Refresh the orders in the component
  }
  saveOrderStatus() {
    // Overwrite orders in localStorage
    this.orderService['saveOrdersToStorage'](this.orders);
    alert('Order status updated!');
  }
  deleteOrder(orderId: string) {
    this.orders = this.orders.filter(order => order.orderId !== orderId);
    this.orderService.updateOrders(this.orders); // Update the orders in localStorage
  }
 

}
