import { Artiste } from '../../model/artiste';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit{
  @Input() artiste!: Artiste;
  @Output() artisteSelected = new EventEmitter<Artiste>();

  isDetailsHidden: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  seeDetails(): void{
    this.isDetailsHidden = false;
  }

  hideDetails(): void{
    this.isDetailsHidden = true;
  }

  deleteArtiste(){
    this.artisteSelected.emit(this.artiste);
  }
}
