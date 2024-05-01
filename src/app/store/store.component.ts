import { Component } from '@angular/core';
import { Product } from '../models/product';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Beautyproduct } from '../models/beautyproduct';
import { BeautyproductService } from '../services/beautyproduct.service';
import { Healthproduct } from '../models/healthproduct.model';
import { HealthproductService } from '../services/healthproduct.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  product: any[] = [];
  products: Product[] = [];
  beautyproduct: any[] = [];
  beautyproducts: Beautyproduct[] = [];
  healthproduct: any[] = [];
  healthproducts: Healthproduct[] = [];
  items: any[] = [];
  searchTerm: string = '';

  constructor(
    private productservice: ProductService,
    private beautyproductservice: BeautyproductService ,
    private healthproductservice: HealthproductService 

  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBeautyProducts();
    this.getHealthProducts();
    this.items = this.productservice.getItems();
  }

 
  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.products = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getProducts();
    }
  }
  



  getProducts(): void {
    this.productservice.getProducts().subscribe(
      (response: Product[]) => { this.products = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }

  getBeautyProducts(): void {
    this.beautyproductservice.getBeautyProducts().subscribe(
      (response: Beautyproduct[]) => { this.beautyproducts = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  getHealthProducts(): void {
    this.healthproductservice.getHealthProducts().subscribe(
      (response: Healthproduct[]) => { this.healthproducts = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
  ajouterProduitAuPanier(product: any) {
    this.productservice.ajouterProduitAuPanier(product);
  }
 
  supprimerProduitsDuPanier(index: number) {
    this.productservice.supprimerProduitsDuPanier(index);
  }

  viderPanier() {
    this.productservice.viderPanier();
    this.items = [];
  }

  calculerTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }
}
