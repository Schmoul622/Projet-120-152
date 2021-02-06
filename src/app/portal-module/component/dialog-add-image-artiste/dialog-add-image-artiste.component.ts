import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Artiste} from '../../model/artiste';
import {ArtisteService} from '../../service/artiste.service';

@Component({
  selector: 'app-dialog-add-image-artiste',
  templateUrl: './dialog-add-image-artiste.component.html',
  styleUrls: ['./dialog-add-image-artiste.component.css']
})
export class DialogAddImageArtisteComponent implements OnInit {
  artiste = {} as Artiste;
  artistes: Array<Artiste>;

  constructor(private _artisteService: ArtisteService,
              public dialogRef: MatDialogRef<DialogAddImageArtisteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  SaveImageArtiste(event): void{
    let File: FileList = event.target.files;
    if (File.length > 0){
      this._artisteService.AddImageArtiste(this.data.artiste.Id, File[0]).subscribe(
        reponse =>
        {
          console.log(reponse);
        },
        error => {}
      );
    }
  }
}
