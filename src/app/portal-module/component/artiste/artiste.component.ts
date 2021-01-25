import { Artiste } from '../../model/artiste';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent{
  @Output() artisteSelected = new EventEmitter();

  constructor() { }



}
