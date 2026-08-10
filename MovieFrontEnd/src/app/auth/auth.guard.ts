import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
// AuthGuard
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private alertifyService: AlertifyService) { }
  // Can Activate
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // if-else
    if (localStorage.getItem('token') != null)
      return true;
    else {
      this.router.navigate(['/user/login']);
      this.alertifyService.error('Please!! First Login into the Website');
      return false;
    }
  }
}
