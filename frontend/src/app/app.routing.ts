import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { DashComponent } from './dash/dash.component';  
import { IngenieurComponent } from './front/examples/ingenieur/ingenieur.component';

const routes: Routes =[
  
  { path: 'front', loadChildren: () => import('./front/front-routing.module').then(m => m.FrontRoutingModule) },
  { path: 'dash', loadChildren: () => import('./dash/dash-routing.module').then(m => m.DashRoutingModule) },

    { path: '', redirectTo: 'front', pathMatch: 'full' },
    {path: 'ingenieur', component: IngenieurComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    

    RouterModule.forRoot(routes,{
      useHash: true
    })
    // RouterModule.forChild(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
