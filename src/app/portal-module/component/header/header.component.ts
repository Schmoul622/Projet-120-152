import { Component, OnInit } from '@angular/core';
import {Login} from '../../../login-module/model/login';
import {AuthService} from '../../../login-module/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login!: Login;
  constructor(private authService: AuthService) { }

  ngOnInit(): void
  {
    this.login = this.authService.loginModel;
  }

  onLogout(): void
  {
    this.authService.logout();
  }

}
