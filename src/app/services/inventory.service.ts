import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private gateway:any="http://localhost:9999";
  private microservice:any="inventory-service";

  constructor(private http : HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(`${this.gateway}/${this.microservice}/products?projection=fullProduct`);
  }

}
