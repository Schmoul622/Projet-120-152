import {NgModule} from '@angular/core';
import {HeaderComponent} from './component/header/header.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {ContentArtisteComponent} from './component/content-artiste/content-artiste.component';
import {ArtisteComponent} from './component/artiste/artiste.component';
import {PortalRoutingModule} from './portal-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PortalComponent} from './component/portal/portal.component';
import {ContentAlbumComponent} from './component/content-album/content-album.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DialogAddArtisteComponent} from './component/dialog-add-artiste/dialog-add-artiste.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogAddImageArtisteComponent} from './component/dialog-add-image-artiste/dialog-add-image-artiste.component';
import {MaterialFileInputModule} from 'ngx-material-file-input' ;
import {MatCardModule} from '@angular/material/card';
import {DialogArtisteEditComponent} from './component/dialog-artiste-edit/dialog-artiste-edit.component';
import { AlbumComponent } from './component/album/album.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentArtisteComponent,
    ArtisteComponent,
    PortalComponent,
    ContentAlbumComponent,
    DialogAddArtisteComponent,
    DialogAddImageArtisteComponent,
    DialogArtisteEditComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    PortalRoutingModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MaterialFileInputModule,
    MatCardModule
  ]
})
export class PortalModule {}
