import {AuthGuard} from '../guard/auth.guard';
import {ContentArtisteComponent} from './component/content-artiste/content-artiste.component';
import {ContentAlbumComponent} from './component/content-album/content-album.component';
import {PortalComponent} from './component/portal/portal.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    canActivate: [AuthGuard],
    component: PortalComponent,
    children: [
        { path: '', component: ContentArtisteComponent},
        { path: 'artiste', component: ContentArtisteComponent},
        { path: 'album', component: ContentAlbumComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {}
