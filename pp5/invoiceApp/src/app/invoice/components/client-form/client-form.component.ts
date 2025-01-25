import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  standalone: false,
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ){}

  onSubmit(){
    console.log(this.customer);

    this.customerService.addCustomer(this.customer).subscribe((data: Customer) => {
      console.log(data);
      alert("Zapisano dane");
      this.router.navigateByUrl("/invoice/customer-list");
    });


    
  }

}
