import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Order } from "../shared/order";
@Component({
  selector: "app-order",
  imports: [CommonModule, FormsModule],
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  product = {
    color: '',
    size: '',
    price: ''
  };
  address = '';
  paymentMethod: 'cash' | 'card'= 'cash';
  quantity = 1;

  submittedOrders: any[] = [];  

  constructor(private orderService: OrderService, private router: Router ) {}

  ngOnInit() {
    this.product = this.orderService.getProduct();
  }

  submitOrder() {

  const orderId = String(new Date().getTime());
  const priceNum = parseFloat(this.product.price);
  const total = priceNum * this.quantity;

   const newOrder: Order = {
      orderId: orderId, // Generate a unique ID based on time
      customerId: "3", // You may want to dynamically set this based on the logged-in user
      orderDetails: [
        {
          productId: "3", // Replace with actual product ID
          orderId: orderId,
          quantity: this.quantity,
          adresa: this.address,
          total: total, // Calculate the total based on the product and quantity
          paymentMethod: this.paymentMethod,
          status: "ne pritje", // Order status
          color: this.product.color,
          size: this.product.size,
          price: parseFloat(this.product.price),
        },
      ],
  }
  this.orderService.addOrder(newOrder);

    // Navigate to the order management page after submission
    this.router.navigate(['/admin/ordermanagement']);
 
}
}
