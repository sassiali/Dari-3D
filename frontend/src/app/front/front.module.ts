import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontComponent } from './front.component';
import {FrontRoutingModule}from './front-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FrontComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    FrontRoutingModule,
    RouterModule,
   
  ],
  providers: [],
  bootstrap: [FrontComponent],

})
export class FrontModule { }
