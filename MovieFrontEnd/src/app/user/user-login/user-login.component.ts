import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/model/user';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
// User Login
export class UserLoginComponent implements OnInit {
  userdetails: any;
  flag: string = "1";
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private service: AuthService,
    private router: Router,
    private movieList: NavBarComponent
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('');
  }
  // On Login
  onLogin(loginForm: NgForm) {
    this.authService.authUser(loginForm.value).subscribe(
      (response: UserForLogin) => {
        const user = response;
        if (response) {
          localStorage.setItem('token', response.token);
          this.alertify.success('Successfully Login!!!');
          this.service.getUserProfile().subscribe(
            res => {
              this.userdetails = res;
              localStorage.setItem('user', this.userdetails.userName);
              this.movieList.onLogout1();
              localStorage.setItem('load', this.flag);
            },
            err => {
              console.log(err);
            },
          );
          this.router.navigate(['/']);
        }
        else {
          this.alertify.error("Invaild UserName OR Password");
        }
      }
    )
  }

}
