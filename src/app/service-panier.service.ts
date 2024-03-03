// service-panier.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePanier {
  supprimerProduitsDuPanier(index: number) {
    this.items.splice(index, 1);
  }
  items: any[] = [];
  supprimerDuPanier: any;

  constructor() {}

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

