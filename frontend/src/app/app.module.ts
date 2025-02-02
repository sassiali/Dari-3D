import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { FrontModule } from './front/front.module';
import { DashComponent } from './dash/dash.component';
import { DashModule } from './dash/dash.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    FrontModule,
    DashModule,
    AppRoutingModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }