import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
// Nav Bar Component
export class NavBarComponent implements OnInit {
  userDetails: any;
  users: any;
  admin: string;
  loggedinUser: any;
  helper: any;

  constructor(private alertify: AlertifyService, private service: AuthService) { }

  ngOnInit() {
    this.admin = localStorage.getItem('user')
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        localStorage.setItem('user', this.userDetails.userName);
        this.users = localStorage.getItem('user');
      },
      err => {
        console.log(err);
      },
    );
  }
  admin1() {
    if (localStorage.getItem('user') == 'admin') {
      return true;
    }
    return false;
  }

  onLogout1() {
    console.log("qwertaf");
  }
  userName: string = '';
  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    this.userName = localStorage.getItem('user');
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.alertify.success("Logged Out");
  }
}
