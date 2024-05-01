import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Promotion } from '../models/promotion';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchProductsByName(searchTerm: string) {
    throw new Error('Method not implemented.');
  }

  readonly API_URL ="http://localhost:8080"
  readonly ENDPOINT_PRODUCTS ="/api/product/all"
  readonly ENDPOINT_ADDPRODUCTS="/api/product/add"
  readonly ENDPOINT_REMOVE="/api/product//delete/{id}"
  readonly ENDPOINT_ADDPROMOTIONS="/api/promotion/add"
  readonly ENDPOINT_PROMOTIONS="/api/promotion/all"


  constructor(private http: HttpClient) { } // Inject HttpClient module

  // POST request to add a product
  addproduct(product: Product): Observable<any> {
    return this.http.post(this.API_URL+this.ENDPOINT_ADDPRODUCTS,product);
  }

  addpromotion(promotion: Promotion): Observable<any> {
    return this.http.post(this.API_URL+this.ENDPOINT_ADDPRODUCTS,promotion);
  }

   getProducts():Observable<any>{
    return this.http.get(this.API_URL+this.ENDPOINT_PRODUCTS);
  }

 getPromotions():Observable<any>{
    return this.http.get(this.API_URL+this.ENDPOINT_PROMOTIONS);
  }



 //delete
 deleteProduct(id: number): Observable<any> {
  return this.http.delete(`${this.API_URL}/api/product/delete/${id}`);
}
supprimerProduitsDuPanier(index: number) {
  this.items.splice(index, 1);
}
items: any[] = [];
supprimerDuPanier: any;



ajouterProduitAuPanier(product: any) {
  this.items.push(product);
}

viderPanier() {
  this.items = [];
}

getItems() {
  return this.items;
}




}