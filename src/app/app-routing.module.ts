import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/create-product/create-product.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'dashboard/create-product',
    component: CreateProductComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
