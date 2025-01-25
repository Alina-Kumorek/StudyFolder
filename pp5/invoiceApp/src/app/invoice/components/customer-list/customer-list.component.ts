import { Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnDestroy {

  customerList: Customer[] = []

  constructor(
    private customerService: CustomerService,
    private router: Router
  ){
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customerList=data;
    });
    console.log(this.customerList);
  }

  deletedCustomer(customer: Customer) {
    console.log("Kasuj klienta " + customer.nip);
    this.customerService.deleteCustomer(customer);
  }


  redirect() {
    this.router.navigateByUrl("invoice/customer-form");
  }

  ngOnDestroy() {
    console.log("zamykam komponent");
  }

}
