import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artiste} from '../../model/artiste';
import {ArtisteService} from '../../service/artiste.service';
import {AlbumServiceService} from '../../service/album-service.service';
import {Album} from '../../model/album';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() idartiste!: number;
  @Output() artisteSelected = new EventEmitter<Artiste>();

  artistes: Array<Artiste>;
  constructor(private _artisteService: ArtisteService,
              private _albumService: AlbumServiceService) { }

  ngOnInit(): void {
  }

  getCurrentArtiste(): Artiste {
    return this._artisteService.artiste;
  }
}
