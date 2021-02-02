import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/login';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login = {} as Login;
  isWrongCredentials = false;

  constructor(private router: Router, private authService: AuthService)
  {
    this.authService.isAuthenticated = false;
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.login(this.login);
    if (this.authService.isAuthenticated)
    {
      this.router.navigate(['portal']);
    } else
    {
      this.isWrongCredentials = true;
    }
  }

}
