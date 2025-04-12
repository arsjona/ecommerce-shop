import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderService } from '../order.service';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule
  ],
  providers: [OrderService]
})
export class OrderModule { }
