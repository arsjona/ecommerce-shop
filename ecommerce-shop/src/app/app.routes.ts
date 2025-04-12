import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OrderComponent } from './order/order.component';
export const routes: Routes = [
{path: '', component: MainpageComponent},
{path: 'order', component: OrderComponent},
];
