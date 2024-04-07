import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultatComponent } from './resultat/resultat.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { StoreComponent } from './store/store.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BresultatComponent } from './bresultat/bresultat.component';
import { HresultatComponent } from './hresultat/hresultat.component';
import { HealthComponent } from './health/health.component';
import { HappinessMapComponent } from './happiness-map/happiness-map.component';
import { PanierComponent } from './panier/panier.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path : 'resultat', component: ResultatComponent},
  {path : 'bresultat', component: BresultatComponent},
  {path : 'panier', component: PanierComponent},
  {path: 'profil' , component:ProfilComponent},

  {path : 'hresultat', component: HresultatComponent},
  {path : 'health', component: HealthComponent},

  {path : 'happiness', component: HappinessMapComponent},


  {path : '', component: HomeComponent},
  {path : 'mental', component: QuestionnaireComponent},
  { path: 'beauty', component: BeautyComponent},
  {path : 'promotion', component: PromotionComponent},

  {path : 'add-produit', component: AddNewProductComponent},
  

  {path : 'store', component: StoreComponent},
 { path: 'register', component: RegisterComponent},
 {path: 'login', component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
