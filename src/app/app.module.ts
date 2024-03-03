import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultatComponent } from './resultat/resultat.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreComponent } from './store/store.component';
import { HappinessComponent } from './happiness/happiness.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { PromotionComponent } from './promotion/promotion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeautyComponent,
 
    QuestionnaireComponent,
    ResultatComponent,
    StoreComponent,
    HappinessComponent,
    AddNewProductComponent,
    PromotionComponent
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
