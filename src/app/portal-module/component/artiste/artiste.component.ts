import { Artiste } from '../../model/artiste';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DialogAddArtisteComponent} from '../dialog-add-artiste/dialog-add-artiste.component';
import {MatDialog} from '@angular/material/dialog';
import {ArtisteService} from '../../service/artiste.service';
import {DialogAddImageArtisteComponent} from '../dialog-add-image-artiste/dialog-add-image-artiste.component';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit{
  @Input() artiste!: Artiste;
  @Output() artisteSelected = new EventEmitter<Artiste>();

  artistes: Array<Artiste>;
  constructor(private _artisteService: ArtisteService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteArtiste(){
    this.artisteSelected.emit(this.artiste);
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
    let newArtiste: Artiste;
    const dialogRef = this.dialog.open(DialogAddImageArtisteComponent, {
      width: '300px',
      data: {artiste: this.artiste}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log("The dialog was closed")
      this.onGetArtistes();
      newArtiste = result;
      console.log(newArtiste);
    })
  }
}
