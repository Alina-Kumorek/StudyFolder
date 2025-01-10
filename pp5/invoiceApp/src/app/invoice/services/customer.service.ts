import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerList: Customer[] = [];


  constructor() { }

  addCustomer(customer: Customer) {
    this.customerList.push(customer);
  }

  getCustomers() :Customer[] {
    return this.customerList;
  }

  deleteCustomer(customer: Customer) {
    const index = this.customerList.indexOf(customer);

    if (index > -1) {
      this.customerList.splice(index, 1);
    }
  }


}
