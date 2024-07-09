import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IngenieurComponent } from './front/examples/ingenieur/ingenieur.component';


import { FrontModule } from './front/front.module';
import { DashComponent } from './dash/dash.component';
import { DashModule } from './dash/dash.module';



@NgModule({
  declarations: [
    AppComponent,
      
    
    // DashComponent,
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    FrontModule,
    DashModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
