import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../models/product';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { BeautyproductService } from '../services/beautyproduct.service';

import { Promotion } from '../models/promotion';
import { Beautyproduct } from '../models/beautyproduct';
import { Healthproduct } from '../models/healthproduct.model';
import { HealthproductService } from '../services/healthproduct.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})


export class AddNewProductComponent implements OnInit {


  constructor(
    private productservice: ProductService,
    private beautyproductservice: BeautyproductService ,
    private healthproductservice: HealthproductService// Injectez le service BeautyproductService ici
  ) {}
  healthproduct: any = {};
  healthproducts: Healthproduct[] = [];
  beautyproduct: any = {};
  beautyproducts: Beautyproduct[] = [];
  product: any = {};
  products: Product[] = [];
  promotion: any = {};
  promotions: Promotion[] = [];

  ngOnInit(): void {
    this.getProduct();
    this.getPromotions();
    this.getBeautyProduct();
    this.getHealthProduct();
    
  
  }



  getProduct(): void {
    this.productservice.getProducts().subscribe(
      (response: Product[]) => { this.products = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }


  getBeautyProduct(): void {
    this.beautyproductservice.getBeautyProducts().subscribe(
      (response: Beautyproduct[]) => { this.beautyproducts = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  getHealthProduct(): void {
    this.healthproductservice.getHealthProducts().subscribe(
      (response: Healthproduct[]) => { this.healthproducts = response; },
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
  addBeautyProduct(addForm: NgForm) {
    this.beautyproductservice.addbeautyproduct(this.beautyproduct).subscribe(
      (response: any) => {
        console.log('Product added successfully', response);
      },
      (error: HttpErrorResponse) => {
        alert('Failed to add product: ' + error.message);
      }
    );
  }
  addHealthProduct(addForm: NgForm) {
    this.healthproductservice.addhealthproduct(this.healthproduct).subscribe(
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
  
  deleteBeautyProduct(id: number): void {
    this.beautyproductservice.deleteBeautyProduct(id).subscribe(() => {
      
    });
  }

  deleteHealthProduct(id: number): void {
    this.healthproductservice.deleteHealthProduct(id).subscribe(() => {
      
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
