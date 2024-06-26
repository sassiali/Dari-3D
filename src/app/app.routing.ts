import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  
  { path: 'front', loadChildren: () => import('./front/front-routing.module').then(m => m.FrontRoutingModule) },
  { path: 'dash', loadChildren: () => import('./dash/dash-routing.module').then(m => m.DashRoutingModule) },

    { path: '', redirectTo: 'dash', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
