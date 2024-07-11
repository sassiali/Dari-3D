import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'; 
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleService } from '../../../core/services/google.service';
import { Role } from '../../../core/models/Users';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    errorMessage: string = '';

    user = {
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      role: ''
    };

    constructor(private authService: AuthService,
                private router: Router,
                private googleService: GoogleService,
                private route: ActivatedRoute) {

                  this.route.queryParams.subscribe(params => {
                    const roleParam = params['role'];
                    if (roleParam) {
                      this.user.role = roleParam as Role; // Set the role from URL parameter
                    } else {
                      this.user.role = Role.CLIENT; // Default role if parameter is missing
                    }
                  });
                }

    ngOnInit(): void {}
  
    signInWithGoogle(): void {
        this.googleService.getAuthUrl().subscribe(
         (ur:any)=>{
          window.location.href =ur.authURL;
         }
        );
      }
  
      register(form: NgForm) {
        if (form.valid) {
         // console.log("formmmmmmmm",form,"jjjjjjjjjjj   ",this.user)
           // this.user.role = 'CLIENT';
            this.authService.register(this.user).subscribe(
                response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Connexion réussie',
                        text: 'Vous êtes connecté avec succès!',
                        timer: 2000,
                        showConfirmButton: false
                      }).then(() => {
                        this.router.navigate(['/landing']);
                      });
                    console.log('Registration successful', response);
                    this.errorMessage = '';
                },
                error => {
                    console.error('Registration failed', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Échec de la connexion',
                        text: 'Une erreur s\'est produite lors de la tentative de connexion. Veuillez réessayer plus tard.',
                        timer: 3000,
                        showConfirmButton: false
                      });
                    if (error.status === 400) {
                        if (error.error === 'email existe!') {
                            this.errorMessage = 'Email déjà utilisé. Veuillez en choisir un autre.';
                        } else if (error.error.phoneNumber === 'Numéro de téléphone invalide') {
                          this.errorMessage = 'Numéro de téléphone invalide. Veuillez vérifier le format.';
                      } 
                    
                    } else if (error.status === 200){

                      Swal.fire({
                        icon: 'success',
                        title: 'Connexion réussie',
                        text: 'Vous êtes connecté avec succès!',
                        timer: 2000,
                        showConfirmButton: false
                      }).then(() => {
                        this.router.navigate(['/signin']);
                      });
                    this.errorMessage = '';                    
                    }
                    else{
                      this.errorMessage = 'Une erreur inattendue s\'est produite.';

                    }
                }
            );
        }
    }
    }

