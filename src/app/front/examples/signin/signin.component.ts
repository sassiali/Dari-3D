import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';
import { Role, Users } from '../../../core/models/Users';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  
  // test : Date = new Date();
    focus;
    focus1;

    email: string = '';
    password: string = '';
    emaill:any;
    user:Users;
    constructor(private authService: AuthService, private router: Router,private userService:UserService) {
     
    }
    login() {
      this.authService.login(this.email, this.password).subscribe(
        response => {
         this.authService.setAccessToken(response.accessToken);
          Swal.fire({
            icon: 'success',
            title: 'Connexion réussie',
            text: 'Vous êtes connecté avec succès!',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.emaill =this.authService.getUserInfo();
            this.userService.getUserByEmail(this.emaill.sub).subscribe(
              data => {
                this.user = data;
                switch (this.user.role) {
                  case Role.ADMINISTRATOR:
                    this.router.navigate(['/dashboard']);
                    break;
                  case Role.SUPPLIER:
                    this.router.navigate(['/fournisseur']);
                    break;
                  case Role.ENGINEER:
                    this.router.navigate(['/ingenieur']);
                    break;
                  case Role.CLIENT:
                    this.router.navigate(['/particulier']);
                    break;
                  default:
                    this.router.navigate(['/landing']);
                    break;
                }  
              },
              error => {
                console.error('Error fetching user by email:', error);
              }
            );

          console.log("le role:",this.user.role);
         
          });
        },
        error => {
          console.error('Échec de la connexion', error);
          Swal.fire({
            icon: 'error',
            title: 'Échec de la connexion',
            text: 'Une erreur s\'est produite lors de la tentative de connexion. Veuillez réessayer plus tard.',
            timer: 3000,
            showConfirmButton: false
          });
        }
      );
    }
    
}
