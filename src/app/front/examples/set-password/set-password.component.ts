import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
  email: string = '';
  password: string = '';
  resetPasswordForm: FormGroup;
  message: string;
  focus1: boolean;
  focus2: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
     private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  forgotPasswordForm: FormGroup;
  focus: boolean;

  // constructor(private route: ActivatedRoute,private fb: FormBuilder, 
  //   private authService: AuthService
  // ) {
  //   this.forgotPasswordForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  // onSubmit(): void {
  //   const email = this.forgotPasswordForm.get('email').value;
  //   this.authService.forgotPassword(email).subscribe(
  //     response => {
  //       this.message = 'mail recu , verifier votre boite mail';
  //       console.log("message serveur:==>",response);
  //     },
  //     error => {
  //       this.message = 'email non trouvé!';
  //     }
  //   );
  // }

  passwordMatchValidator(form: AbstractControl): ValidatorFn {
    return () => {
      const newPassword = form.get('newPassword').value;
      const confirmPassword = form.get('confirmPassword').value;
      if (newPassword !== confirmPassword) {
        form.get('confirmPassword').setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }

  // onSubmit(): void {
  //   const newPassword = this.resetPasswordForm.get('newPassword').value;
  //   const email = this.route.snapshot.paramMap.get('email');

  //   this.authService.resetPassword(email, newPassword).subscribe(
  //     response => {
  //       this.message = 'Password has been reset successfully.';
  //     },
  //     error => {
  //       this.message = 'An error occurred. Please try again.';
  //     }
  //   );
  // }

  onSubmit(): void {
    const newPassword = this.resetPasswordForm.get('newPassword').value;
    const email = this.route.snapshot.paramMap.get('email');
  
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
  
    this.authService.resetPassword(email, newPassword).subscribe(
      response => {
        console.log("reppppp",response);
        // Cacher l'icône de chargement et afficher le message de succès
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Mot de passe réinitialisé',
          text: 'Votre mot de passe a été réinitialisé avec succès.',
          timer: 5000,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/signin']);
        });
      },
      error => {

        Swal.close();
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Mot de passe réinitialisé',
            text: 'Votre mot de passe a été réinitialisé avec succès.',
            timer: 5000,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['/signin']);
          });
      
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue. Veuillez réessayer.',
          timer: 5000,
          showConfirmButton: false
        });
      }}
    );
  }
}
