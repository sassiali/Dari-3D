import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleService } from '../../../core/services/google.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss']
})
export class CallBackComponent {
  test : Date = new Date();
  focus;
  focus1;
  errorMessage: string = '';
  userProfile={
    name:'',
    email:''
  }
  user = {
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: ''
  };
  // userProfile: any; // Définir le type approprié pour les informations de profil
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private googleAuthService: GoogleService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.googleAuthService.getToken(code).subscribe(
          (tokenDto: any) => {
            this.googleAuthService.setAccessToken(tokenDto.token);
            this.isAuthenticated = true;
            this.loadUserProfile();
          },
          error => {
            console.error('Error exchanging code for token:', error);
            // Gérer les erreurs, par exemple, afficher un message d'erreur
          }
        );
      }
    });
  }

  loadUserProfile(): void {
    this.googleAuthService.getUserProfile().subscribe(
      (profile: any) => {
        this.userProfile = profile;
        console.log('User profile:', this.userProfile);
        console.log(' ,userName: ',this.userProfile.name ,' email:', this.userProfile.email );
        this.user.userName = this.userProfile.name;
                this.user.email = this.userProfile.email;
        // Gérer l'affichage des informations de profil dans votre template HTML
      },
      error => {
        console.error('Error fetching user profile:', error);
        // Gérer les erreurs, par exemple, afficher un message d'erreur
      }
    );
  }

  signInWithGoogle(): void {
    this.googleAuthService.getAuthUrl().subscribe(
     (ur:any)=>{
      window.location.href =ur.authURL;
     }
    );
  }
 
register(form: NgForm) {
    if (form.valid) {
        this.user.role = 'CLIENT';
        this.authService.register(this.user).subscribe(
            response => {
            //  this.authService.setAccessToken(response.token);
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
                    this.router.navigate(['/landing']);
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
