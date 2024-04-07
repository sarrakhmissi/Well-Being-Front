import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../models/product';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Promotion } from '../models/promotion';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})


export class AddNewProductComponent implements OnInit {


  constructor(private productservice: ProductService) {}


  product: any = {};
  products: Product[] = [];
  promotion: any ={};
  promotions:Promotion [] = [];


  ngOnInit(): void {
    this.getProduct();
    this.getPromotions();

  }


  getProduct(): void {
    this.productservice.getProducts().subscribe(
      (response: Product[]) => { this.products = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }



  getPromotions():void{
    this.productservice.getPromotions().subscribe(
      (response:Promotion[])=>{this.promotions=response;},
      (error:HttpErrorResponse)=>{alert(error.message);}
  )
    
  }


  addProduct(addForm: NgForm) {
    this.productservice.addproduct(this.product).subscribe(
      (response: any) => {
        console.log('Product added successfully', response);
      },
      (error: HttpErrorResponse) => {
        alert('Failed to add product: ' + error.message);
      }
    );
  }


  deleteProduct(id: number): void {
    this.productservice.deleteProduct(id).subscribe(() => {
      
    });
  }
  
  


  
  addPromotion(addForm: NgForm) {
    this.productservice.addpromotion(this.promotion).subscribe(
      (response) => {
        console.log('Promotion added successfully', response);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

}
