


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Healthproduct } from '../models/healthproduct.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HealthproductService {
  searchProductsByName(searchTerm: string) {
    throw new Error('Method not implemented.');
  }

  readonly API_URL ="http://localhost:8080"
  readonly ENDPOINT_MENTALPRODUCTS ="/api/productMental/all"
  readonly ENDPOINT_ADDMENTALPRODUCTS="/api/productMental/add"
  readonly ENDPOINT_REMOVE="/api/productMental//delete/{id}"
  readonly ENDPOINT_ADDPROMOTIONS="/api/promotion/add"
  readonly ENDPOINT_PROMOTIONS="/api/promotion/all"


  constructor(private http: HttpClient) { } 

  // POST request to add a product
  addhealthproduct(healthproduct: Healthproduct): Observable<any> {
    return this.http.post(this.API_URL+this.ENDPOINT_ADDMENTALPRODUCTS,healthproduct);
  }

  

   getHealthProducts():Observable<any>{
    return this.http.get(this.API_URL+this.ENDPOINT_MENTALPRODUCTS);
  }





 //delete
 deleteHealthProduct(id: number): Observable<any> {
  return this.http.delete(`${this.API_URL}/api/productMental/delete/${id}`);
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