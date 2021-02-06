import {Component, Inject, OnInit} from '@angular/core';
import {ArtisteService} from '../../service/artiste.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Artiste} from '../../model/artiste';

@Component({
  selector: 'app-dialog-artiste-edit',
  templateUrl: './dialog-artiste-edit.component.html',
  styleUrls: ['./dialog-artiste-edit.component.css']
})
export class DialogArtisteEditComponent implements OnInit {

  constructor(private _artisteService: ArtisteService,
      public dialogRef: MatDialogRef<DialogArtisteEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  onSaveArtiste(artiste: Artiste): void{
    this._artisteService.EditArtiste(artiste).subscribe(
      data =>
      {
        this.data.artiste = {} as Artiste;
      },
      error =>
      {}
    );
  }

  saveArtiste(): void{
    this.onSaveArtiste(this.data.artiste);
  }

}
