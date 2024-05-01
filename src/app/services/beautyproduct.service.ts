

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beautyproduct } from '../models/beautyproduct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BeautyproductService {
  searchProductsByName(searchTerm: string) {
    throw new Error('Method not implemented.');
  }

  readonly API_URL ="http://localhost:8080"
  readonly ENDPOINT_BEAUTYPRODUCTS ="/api/beautyproduct/all"
  readonly ENDPOINT_ADDBEAUTYPRODUCTS="/api/beautyproduct/add"
  readonly ENDPOINT_REMOVE="/api/beautyproduct//delete/{id}"
  readonly ENDPOINT_ADDPROMOTIONS="/api/promotion/add"
  readonly ENDPOINT_PROMOTIONS="/api/promotion/all"


  constructor(private http: HttpClient) { } 

  // POST request to add a product
  addbeautyproduct(beautyproduct: Beautyproduct): Observable<any> {
    return this.http.post(this.API_URL+this.ENDPOINT_ADDBEAUTYPRODUCTS,beautyproduct);
  }

  

   getBeautyProducts():Observable<any>{
    return this.http.get(this.API_URL+this.ENDPOINT_BEAUTYPRODUCTS);
  }





 //delete
 deleteBeautyProduct(id: number): Observable<any> {
  return this.http.delete(`${this.API_URL}/api/beautyproduct/delete/${id}`);
}
supprimerProduitsDuPanier(index: number) {
  this.items.splice(index, 1);
}
items: any[] = [];
supprimerDuPanier: any;



ajouterProduitAuPanier(beautyproduct: any) {
  this.items.push(beautyproduct);
}

viderPanier() {
  this.items = [];
}

getItems() {
  return this.items;
}


}