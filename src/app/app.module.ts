import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './portal-module/component/header/header.component';
import { SidebarComponent } from './portal-module/component/sidebar/sidebar.component';
import { HeaderContentComponent } from './portal-module/component/header-content/header-content.component';
import { ContentComponent } from './portal-module/component/content/content.component';
import { ArtisteComponent } from './portal-module/component/artiste/artiste.component';
import { AuthComponent } from './login-module/component/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderContentComponent,
    ContentComponent,
    ArtisteComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
