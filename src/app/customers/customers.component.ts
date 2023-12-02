import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
//Implémentation de l'interface OnInit pour redéfinir la méthode ngOnInit()
export class CustomersComponent implements OnInit{


  //Attribut des customers
  public customers:any;

  //Injection du service CustomerService et Router 
  constructor(private customerService: CustomerService, private router: Router ){}


  //Initialisation du composant
  ngOnInit(): void {

    this.customerService.getCustomers().subscribe({
      next : (customers)=>{
        this.customers=customers._embedded.customers;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }



  //Méthodes du composants "Customers"
  getOrders(c: any) {
    this.router.navigateByUrl("/orders/"+c.id);
  }

}
