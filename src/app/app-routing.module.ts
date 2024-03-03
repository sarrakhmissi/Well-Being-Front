import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultatComponent } from './resultat/resultat.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { StoreComponent } from './store/store.component';
import { HappinessComponent } from './happiness/happiness.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  {path : 'resultat', component: ResultatComponent},
  {path : '', component: HomeComponent},
  {path : 'mental', component: QuestionnaireComponent},
  {path : 'promotion', component: PromotionComponent},

  {path : 'add-produit', component: AddNewProductComponent},

  {path : 'happiness', component: HappinessComponent},
  {path : 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
