import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserForLogin, UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
//AuthService 
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  authUser(user: UserForLogin): Observable<UserForLogin> {
    return this.http.post<UserForLogin>(this.baseUrl + '/ApplicationUser/login', user);
  }
  getUserProfile() {
    return this.http.get(this.baseUrl + '/UserProfile');
  }

  registerUser(user: UserForRegister) {
    return this.http.post(this.baseUrl + '/ApplicationUser/register', user);
  }
}
