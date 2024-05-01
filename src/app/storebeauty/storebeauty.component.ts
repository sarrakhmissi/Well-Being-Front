
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Beautyproduct } from '../models/beautyproduct';
import { BeautyproductService } from '../services/beautyproduct.service';


@Component({
  selector: 'app-storebeauty',
  templateUrl: './storebeauty.component.html',
  styleUrls: ['./storebeauty.component.css']
})
export class StorebeautyComponent {

  beautyproduct: any[] = [];
  beautyproducts: Beautyproduct[] = [];
 
  items: any[] = [];
  searchTerm: string = '';

  constructor(
    private beautyproductservice: BeautyproductService ,

  ) {}

  ngOnInit(): void {
    this.getBeautyProducts();
    this.items = this.beautyproductservice.getItems();
  }

 
  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.beautyproducts = this.beautyproducts.filter(beautyproduct =>
        beautyproduct.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getBeautyProducts();
    }
  }
  



 

  getBeautyProducts(): void {
    this.beautyproductservice.getBeautyProducts().subscribe(
      (response: Beautyproduct[]) => { this.beautyproducts = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
 
  ajouterProduitAuPanier(product: any) {
    this.beautyproductservice.ajouterProduitAuPanier(product);
  }
 
  supprimerProduitsDuPanier(index: number) {
    this.beautyproductservice.supprimerProduitsDuPanier(index);
  }

  viderPanier() {
    this.beautyproductservice.viderPanier();
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
