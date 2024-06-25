import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { FrontComponent } from './front/front.component';
import { FrontModule } from './front/front.module';
import { NavbarComponent } from './front/shared/navbar/navbar.component';
import { FooterComponent } from './front/shared/footer/footer.component';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    FrontModule,
    AppRoutingModule,
  ],
  providers: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
