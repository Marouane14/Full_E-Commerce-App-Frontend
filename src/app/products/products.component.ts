import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{


  public products:any

  constructor(private inventory:InventoryService){}

  ngOnInit(): void {
    this.inventory.getProducts().subscribe({
      next : data => {
        //console.log(data);
        this.products=data._embedded.products;
      },
      error : err=>{
        console.log(err);
      }
    })
  }
}
