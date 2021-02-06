import { Component, OnInit } from '@angular/core';
import {Artiste} from '../../model/artiste';
import {ArtisteService} from '../../service/artiste.service';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogAddArtisteComponent} from '../dialog-add-artiste/dialog-add-artiste.component';

@Component({
  selector: 'app-content',
  templateUrl: './content-artiste.component.html',
  styleUrls: ['./content-artiste.component.css']
})
export class ContentArtisteComponent implements OnInit {
  artiste = {} as Artiste;
  artistes: Array<Artiste>;
  constructor(private _artisteService: ArtisteService, public dialog: MatDialog) {}

  ngOnInit(): void{
    this.onGetArtistes();
  }

  openDialog(): void{
    let newArtiste: Artiste;
    const dialogRef = this.dialog.open(DialogAddArtisteComponent, {
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

  onDeleteArtiste(artiste: Artiste): void{
    this._artisteService.deleteArtiste(artiste).subscribe(() => this.onGetArtistes())
  }

  deleteArtiste(artiste: Artiste): void{
    this.onDeleteArtiste(artiste);
  }
}
