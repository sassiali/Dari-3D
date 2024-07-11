import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Role } from '../../../core/models/Users';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  Role = Role; // Déclaration de Role dans le composant

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['code']) {
        console.log("le code ",params['code'])
    }
  });
  }
  redirectToRolePage(role: Role) {
    console.log("le role de user :",role)
    if (this.authService.isUserLoggedIn()) {
      switch (role) {
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
    } else {
      this.router.navigate(['/signup'], { queryParams: { role: role } });
    }
  }
}
