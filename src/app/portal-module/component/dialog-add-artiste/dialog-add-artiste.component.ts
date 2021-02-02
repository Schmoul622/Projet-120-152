import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Artiste} from '../../model/artiste';
import {ArtisteService} from '../../service/artiste.service';

@Component({
  selector: 'app-dialog-add-artiste',
  templateUrl: './dialog-add-artiste.component.html',
  styleUrls: ['./dialog-add-artiste.component.css']
})
export class DialogAddArtisteComponent implements OnInit {
  //artiste = {} as Artiste;
  artistes: Array<Artiste>;

  constructor(private _artisteService: ArtisteService,
    public dialogRef: MatDialogRef<DialogAddArtisteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
   this.dialogRef.close();
  }

  onSaveArtiste(artiste: Artiste): void{
    this._artisteService.addArtiste(artiste).subscribe(
      data =>
      {

        this.data.artiste = {} as Artiste;
      },
      error =>
      {}
    );
  }

  saveArtiste():void{
    this.onSaveArtiste(this.data.artiste);
  }
}
