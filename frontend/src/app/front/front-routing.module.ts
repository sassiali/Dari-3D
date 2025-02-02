import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front.component';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { IngenieurComponent } from './examples/ingenieur/ingenieur.component';
import { ParticulierComponent } from './examples/particulier/particulier.component';
import { FournisseurComponent } from './examples/fournisseur/fournisseur.component';
import { SigninComponent } from './examples/signin/signin.component';
import { GeneratorComponent } from './examples/generator/generator.component';

const routes: Routes =[{
  path: '', 
    component: FrontComponent,
    children: [
    { path: 'home',             component: ComponentsComponent },
    { path: 'ingenieur',             component: IngenieurComponent },
    { path: 'particulier',             component: ParticulierComponent },
    { path: 'fournisseur',             component: FournisseurComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'signin',           component: SigninComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'choix',          component: GeneratorComponent },

    { path: 'nucleoicons',      component: NucleoiconsComponent },
     { path: '', redirectTo: 'landing', pathMatch: 'full' },
    ]}
];

@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule,
    // RouterModule.forRoot(routes,{
    //   useHash: true
    // })
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
})
export class FrontRoutingModule { }
