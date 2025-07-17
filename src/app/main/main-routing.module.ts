import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },

  {
    path:'product', component : ProductsComponent
  },

  {
    path:'order', component : OrdersComponent
  },

  {
    path:'user', component : UsersComponent
  },

  {
    path:'userprofile', component : ProfileComponent
  },

  {
    path:'main', component : MainComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
