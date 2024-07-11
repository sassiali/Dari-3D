import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { Users } from '../../../core/models/Users';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
email:any;
userInfo:Users;
    constructor(
        private userService:UserService
        ,private authService:AuthService
    ) { }

    ngOnInit() {
        this.email=this.authService.getUserInfo()
        this.userService.getUserByEmail(this.email.sub).subscribe(
            data => {
              this.userInfo = data;
              console.log("hello user info",this.userInfo)

            },
            error => {
              console.error('Error fetching user by email:', error);
            }
          );
    }

}
