import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { IngenieurComponent } from './ingenieur/ingenieur.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { GeneratorComponent } from './generator/generator.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        ReactiveFormsModule,
       

        

    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        IngenieurComponent,
        ParticulierComponent,
        FournisseurComponent,
        SigninComponent,
        GeneratorComponent,

    ]
})
export class ExamplesModule { }
