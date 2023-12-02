import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private gateway:any="http://localhost:9999";
  private microservice:any="customer-service";
  constructor(private http: HttpClient) { }

  getCustomers():Observable<any>{
    return this.http.get(`${this.gateway}/${this.microservice}/customers?projection=fullCustomer`);
  }


}
