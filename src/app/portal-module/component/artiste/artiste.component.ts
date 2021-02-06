import { Artiste } from '../../model/artiste';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DialogAddArtisteComponent} from '../dialog-add-artiste/dialog-add-artiste.component';
import {MatDialog} from '@angular/material/dialog';
import {ArtisteService} from '../../service/artiste.service';
import {DialogAddImageArtisteComponent} from '../dialog-add-image-artiste/dialog-add-image-artiste.component';
import { NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DialogArtisteEditComponent} from '../dialog-artiste-edit/dialog-artiste-edit.component';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ArtisteComponent implements OnInit{
  @Input() artiste!: Artiste;
  @Output() artisteSelected = new EventEmitter<Artiste>();
  url: string;

  artistes: Array<Artiste>;
  constructor(private _artisteService: ArtisteService,
              public dialog: MatDialog,
              config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.url = "https://localhost:5001/artistes/" + this.artiste.Id + "/getAvatar?t="+new Date().getTime();
  }

  deleteArtiste(){
    this.artisteSelected.emit(this.artiste);
  }

  getSingleArtiste(): void{
    this._artisteService.getCurrentArtiste(this.artiste);
  }

  onGetArtistes(): void{
    this._artisteService.getArtistes().subscribe(
      data =>
      {
        if (data)
        {
          this.artistes = data;
        }
      },
      error =>
      {}
    );
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DialogAddImageArtisteComponent, {
      width: '250px',
      data: {artiste: this.artiste}
    });

    dialogRef.afterClosed().subscribe( result => {
      this.onGetArtistes();
      this.url = "https://localhost:5001/artistes/" + this.artiste.Id + "/getAvatar?t="+new Date().getTime();
    })
  }

  open(content) {
    this.modalService.open(content);
  }

  openDialogEdit(): void{
    const dialogRef = this.dialog.open(DialogArtisteEditComponent, {
      width: '300px',
      data: {artiste: this.artiste}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onGetArtistes();
    })
  }
}
