import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    ProfileComponent,
    OrdersComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule
  ]
})
export class MainModule { }
