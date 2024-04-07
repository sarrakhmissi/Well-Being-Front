import { Component } from '@angular/core';
import { Product } from '../models/product';
import { HttpErrorResponse} from '@angular/common/http';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-pavier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {



  [x: string]: any;
  product: any[] = [];
   products:Product[]=[]
  constructor(private productservice:ProductService){}
  ngOnInit(): void {
    this.getProducts()
    this.items = this.productservice.getItems();

  }
     
ajouterProduitAuPanier(product: any) {
    this.productservice.ajouterProduitAuPanier(product);
  }
  getProducts():void{
    this.productservice.getProducts().subscribe(
      (response:Product[])=>{this.products=response},
      (error:HttpErrorResponse)=>{alert(error.message)}
      )
        
  }
  

  items: any[] = []; // Déclaration de la propriété items comme un tableau


  

  supprimerProduitsDuPanier(index: number) {
    this.productservice.supprimerProduitsDuPanier(index); // Appeler la méthode pour supprimer un élément du panier dans le service
  }

  viderPanier() {
    this.productservice.viderPanier(); // Appeler la méthode pour vider le panier dans le service
    this.items = []; // Mettre à jour la liste des articles dans le composant
  }

  calculerTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
    
  }
    
}
