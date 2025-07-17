import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,

    children: [
        {
          path: '', component: DashboardComponent
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
          path:'dashboard', component : DashboardComponent
        },
    ]
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
