import { Injectable } from '@angular/core';
import {Login} from '../model/login';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;
  public loginModel: Login;
  constructor(private router: Router) { }

  login(login: Login): void
  {
    if (login.username == 'user' && login.password == 'epsic')
    {
      this.loginModel = login;
      this.isAuthenticated = true;
    } else
    {
      this.isAuthenticated = false;
    }
  }

  logout(): void
  {
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }
}
