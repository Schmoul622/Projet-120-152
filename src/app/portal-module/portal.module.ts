import {NgModule} from '@angular/core';
import {HeaderComponent} from './component/header/header.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {ContentArtisteComponent} from './component/content-artiste/content-artiste.component';
import {ArtisteComponent} from './component/artiste/artiste.component';
import {PortalRoutingModule} from './portal-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PortalComponent} from './component/portal/portal.component';
import { ContentAlbumComponent } from './component/content-album/content-album.component';
import { ArtisteMgtComponent } from './component/artiste-mgt/artiste-mgt.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DialogAddArtisteComponent } from './component/dialog-add-artiste/dialog-add-artiste.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentArtisteComponent,
    ArtisteComponent,
    PortalComponent,
    ContentAlbumComponent,
    ArtisteMgtComponent,
    DialogAddArtisteComponent,

  ],
  imports: [
    BrowserModule,
    PortalRoutingModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class PortalModule {}
