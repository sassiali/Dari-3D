import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { FournisseurComponent } from './Gestions/fournisseur/fournisseur.component';
import { IngenieurComponent } from './Gestions/ingenieur/ingenieur.component';
import { ParticulierComponent } from './Gestions/particulier/particulier.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
      ,
      {
        path: 'dash/fournisseur',
        component:FournisseurComponent
      },
      {
        path: 'dash/ingenieur',
        component:IngenieurComponent
      },
      {
        path: 'dash/particulier',
        component:ParticulierComponent
      },
      {
        path: 'dash/fournisseur',
        component:FournisseurComponent
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class DashRoutingModule { }
