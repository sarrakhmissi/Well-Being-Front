

import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HealthproductService } from '../services/healthproduct.service';
import { Healthproduct } from '../models/healthproduct.model';


@Component({
  selector: 'app-storehealth',
  templateUrl: './storehealth.component.html',
  styleUrls: ['./storehealth.component.css']
})
export class StorehealthComponent {

  healthproduct: any[] = [];
  healthproducts: Healthproduct[] = [];
 
  items: any[] = [];
  searchTerm: string = '';

  constructor(
    private healthproductservice: HealthproductService ,

  ) {}

  ngOnInit(): void {
    this.getHealthProducts();
    this.items = this.healthproductservice.getItems();
  }

 
  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.healthproducts = this.healthproducts.filter(healthproduct =>
        healthproduct.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getHealthProducts();
    }
  }
  



 

  getHealthProducts(): void {
    this.healthproductservice.getHealthProducts().subscribe(
      (response: Healthproduct[]) => { this.healthproducts = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
 
  ajouterProduitAuPanier(product: any) {
    this.healthproductservice.ajouterProduitAuPanier(product);
  }
 
  supprimerProduitsDuPanier(index: number) {
    this.healthproductservice.supprimerProduitsDuPanier(index);
  }

  viderPanier() {
    this.healthproductservice.viderPanier();
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
