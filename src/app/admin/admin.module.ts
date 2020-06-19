import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashboardComponent, ProductsListComponent, ProductsFormComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
