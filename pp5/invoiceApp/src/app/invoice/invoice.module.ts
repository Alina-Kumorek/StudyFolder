import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';



@NgModule({
  declarations: [
    ClientFormComponent,
    CustomerListComponent
  ],
  exports: [
    ClientFormComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
