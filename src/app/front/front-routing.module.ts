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
import { ForgetPasswordComponent } from './examples/forget-password/forget-password.component';
import { SetPasswordComponent } from './examples/set-password/set-password.component';
import { CallBackComponent } from './examples/call-back/call-back.component';

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
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    {path:'forgot-password',    component:ForgetPasswordComponent},
    {path:'set-password/:email',    component:SetPasswordComponent},
    {path:'callback',    component:CallBackComponent},


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
    RouterModule.forRoot(routes, { useHash: false })  ],
  exports: [
  ],
})
export class FrontRoutingModule { }
