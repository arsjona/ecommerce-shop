
import { OrderComponent } from './order/order.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { DefaultComponent } from './default/default.component';

const routes = [
    { path: '', component: MainpageComponent },
    { path: 'admin', component: AdminComponent, children: [
        { path: "", component: DefaultComponent },
        { path: "users", component: UsersComponent },
        { path: "categories", component: CategoriesComponent }
    ] },
  {path : 'order',component: OrderComponent}
]
export { routes };
