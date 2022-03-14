import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _signupUrl = "http://localhost:3000/profiles/register"
  private _signinUrl = "http://localhost:3000/profiles/login"

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._signupUrl, user)
  }
  
  loginUser(user) {
    return this.http.post<any>(this._signinUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/signin'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
