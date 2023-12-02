import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private gateway:any="http://localhost:9999";
  private microservice:any="order-service";

  constructor(private http : HttpClient) { }

  getOrdersById(id : any):Observable<any>{
    return this.http.get(`${this.gateway}/${this.microservice}/orders/search/byCustomerId?customerId=${id}&projection=fullOrder`);
  }
  getOrderDetails(id : any):Observable<any>{
    return this.http.get(`${this.gateway}/${this.microservice}/fullOrder/${id}`);
  }
}
