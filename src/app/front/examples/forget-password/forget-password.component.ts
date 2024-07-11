import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{
  forgotPasswordForm: FormGroup;
  message: string;
  test: Date = new Date();
  focus: boolean;
  focus1: boolean;
  ngOnInit(): void {
    console.log("hello forget password");

  }
  constructor(private fb: FormBuilder, 
    private authService: AuthService, private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    const email = this.forgotPasswordForm.get('email').value;
  
    // Afficher l'icône de chargement
    Swal.fire({
      title: 'Envoi en cours',
      html: 'Veuillez patienter...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
  
    this.authService.forgotPassword(email).subscribe(
      response => {
        // Cacher l'icône de chargement et afficher le message de succès
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Mail envoyé',
          text: 'Un email de réinitialisation de mot de passe a été envoyé à votre adresse.',
          timer: 5000,
          showConfirmButton: false
        });
      },
      error => {
        // Cacher l'icône de chargement et afficher le message d'erreur
        Swal.close();
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Mail envoyé',
            text: 'Un email de réinitialisation de mot de passe a été envoyé à votre adresse.',
            timer: 5000,
            showConfirmButton: false
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Email non trouvé',
            text: 'Aucun compte n\'est associé à cette adresse email.',
            timer: 5000,
            showConfirmButton: false
          });
        }
      }
    );
  }



  // onSubmit(): void {
  //     const email = this.forgotPasswordForm.get('email').value;
  //     this.authService.forgotPassword(email).subscribe(
  
  //       response => {
  //         console.log("reponse serveur ",response);
  //       });}
  
}
