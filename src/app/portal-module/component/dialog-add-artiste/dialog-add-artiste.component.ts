import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Artiste} from '../../model/artiste';

@Component({
  selector: 'app-dialog-add-artiste',
  templateUrl: './dialog-add-artiste.component.html',
  styleUrls: ['./dialog-add-artiste.component.css']
})
export class DialogAddArtisteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAddArtisteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
   this.dialogRef.close();
  }
}
