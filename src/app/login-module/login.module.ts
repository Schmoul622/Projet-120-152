import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { AuthComponent } from './component/auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    FormsModule
  ],
})
export class LoginModule { }
