import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrl: './orders-details.component.css'
})
export class OrdersDetailsComponent implements OnInit{

  orderDetails:any;
  orderId:any;

  constructor(private orderService: OrderService,private route : ActivatedRoute){}
  ngOnInit(): void {
    this.orderId=this.route.snapshot.params['orderId'];
    this.orderService.getOrderDetails(this.orderId).subscribe({
      next : (ordersDetails)=>{
        this.orderDetails=ordersDetails;
      }
    });
  }


}
