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
import { PanierComponent } from './panier/panier.component';
import { ProfilComponent } from './profil/profil.component';
import { ContentListComponent } from './content-list/content-list.component';
import { AddContentComponent } from './add-content/add-content.component';
import { Path } from 'leaflet';
import { StorebeautyComponent } from './storebeauty/storebeauty.component';
import { StorehealthComponent } from './storehealth/storehealth.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { ReservedComponent } from './reserved/reserved.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path : 'resultat', component: ResultatComponent},
  {path : 'bresultat', component: BresultatComponent},
  {path : 'panier', component: PanierComponent},
  {path : 'tips', component:ContentListComponent},
  {path : 'add-course', component:AddContentComponent},

  {path: 'profil' , component:ProfilComponent},

  {path : 'hresultat', component: HresultatComponent},
  {path : 'health', component: HealthComponent},


  {path : 'home', component: HomeComponent},

  {path : 'mental', component: QuestionnaireComponent},
  { path: 'beauty', component: BeautyComponent},
  {path : 'promotion', component: PromotionComponent},
  { path: 'login', component: LoginComponent },

  {path : 'admin', component: AddNewProductComponent},
  {path : 'storemental', component: StoreComponent},
  {path : 'about', component: AboutComponent},

  {path : 'rendezvous', component: RendezvousComponent},

  {path : 'storebeauty', component: StorebeautyComponent},
  {path : 'reserved', component: ReservedComponent},

  {path : 'healthstore', component: StorehealthComponent},
  { path: 'register', component: RegisterComponent},

  {path: '', component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
