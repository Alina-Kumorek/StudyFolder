import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class CustomerService {

  private customerList: Customer[] = [];
  private baseUrl="http://localhost:3000/customers";


  constructor(
    private httpClient: HttpClient
  ) { }

  addCustomer(customer: Customer): Observable<Customer> {

    return this.httpClient.post<Customer>(this.baseUrl, customer);



    // this.customerList.push(customer);
  }

  getCustomers() : Observable<Customer[]> {
    
    return this.httpClient.get<Customer[]>(this.baseUrl)
      .pipe(
        map((customers: Customer[]) => (
          customers.map((customer: Customer) => new Customer().deserialize(customer))
        ))
      );

    // return this.customerList;
  }

  deleteCustomer(customer: Customer) {
    const headers = new HttpHeaders({
      "x-correlationId": "msg"
    });

    const url = this.baseUrl + "/" + customer.nip;

    return this.httpClient.delete(url, {headers});
  //   const index = this.customerList.indexOf(customer);

  //   if (index > -1) {
  //     this.customerList.splice(index, 1);
  //   }
  }


}
