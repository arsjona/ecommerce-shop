import { Component,OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-raport',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './raport.component.html',
  styleUrl: './raport.component.scss'
})
export class RaportComponent implements OnInit {
  weeklyOrders: Order[] = [];
  totalOrders = 0;
  totalRevenue = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const allOrders = this.orderService.getOrders();

    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    this.weeklyOrders = allOrders.filter(order => {
      const orderDate = new Date(Number(order.orderId)); // since orderId = timestamp
      return orderDate >= weekStart && orderDate < weekEnd;
    });

    this.totalOrders = this.weeklyOrders.length;
    this.totalRevenue = this.weeklyOrders.reduce((sum, order) => {
      return sum + order.orderDetails.reduce((dSum, detail) => dSum + detail.total, 0);
    }, 0);
  }
}
