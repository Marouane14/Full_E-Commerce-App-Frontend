import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{


  orders:any;
  customerId:any;
  constructor(private orderService: OrderService,private route : ActivatedRoute, private router:Router) {

  }
  ngOnInit(): void {
    this.customerId=this.route.snapshot.params['customerId'];
    this.orderService.getOrdersById(this.customerId).subscribe({
      next : (orders)=>{
        this.orders=orders._embedded.orders;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  getOrdersDetails(o: any) {
    this.router.navigateByUrl('/orderDetails/'+o.id);
  }
}
