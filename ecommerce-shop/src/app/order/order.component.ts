
import { Component, OnInit } from "@angular/core";
import { Order } from "../shared/order"
import { OrderService } from "../order.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-order",
  imports: [CommonModule],
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  private loadOrders(): void {
    this.orderService
      .getOrders()
      .subscribe((orders: Order[]) => this.orders = orders);
  }
}

