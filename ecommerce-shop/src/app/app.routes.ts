import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    { path: "order", component: OrderComponent },
    { path: "**", redirectTo: "order" }
];
