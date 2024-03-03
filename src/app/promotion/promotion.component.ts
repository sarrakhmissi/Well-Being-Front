import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Promotion } from '../models/promotion';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent {
  promotion: any[] = [];

  promotions:Promotion[]=[]
  constructor(private productservice:ProductService){}
  ngOnInit(): void {
    this.getPromotion()

  }
  getPromotion():void{
    this.productservice.getPromotions().subscribe(
      (response:Promotion[])=>{this.promotions=response},
      (error:HttpErrorResponse)=>{alert(error.message)}
      )
  
  }
}
