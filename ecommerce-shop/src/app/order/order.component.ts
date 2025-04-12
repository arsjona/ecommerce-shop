import { Component} from "@angular/core";
import { OrderService } from "../order.service";
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-order",
  imports: [CommonModule,FormsModule],
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  providers: [OrderService]
})
export class OrderComponent  {
  product = {
    color: '',
    size: '',
    price: ''
  };
  address = '';
  paymentMethod = '';
  quantity = 1;
  constructor(private orderService: OrderService) {}
  submitOrder() {
    console.log({
      product: this.product,
      address: this.address,
      paymentMethod: this.paymentMethod,
      quantity: this.quantity
    });
  }
  
}





