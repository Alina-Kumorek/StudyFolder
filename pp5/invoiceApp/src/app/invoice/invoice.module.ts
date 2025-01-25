import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';



@NgModule({
  declarations: [
    ClientFormComponent,
    CustomerListComponent,
    CustomerListElementComponent
  ],
  exports: [
    ClientFormComponent,
    CustomerListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    InvoiceRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService]
})

export class InvoiceModule { }
