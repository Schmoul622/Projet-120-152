import { Observable } from 'rxjs';
import {Artiste} from '../model/artiste';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  url: string = "https://localhost:5001/getAll/artistes";
  url2: string = "https://localhost:5001/create/artiste";
  artiste: Artiste;

  constructor(private http: HttpClient)
  { }

  getArtistes(): Observable<Array<Artiste>>{
    return this.http.get<[Artiste]>(this.url);
  }

  addArtiste(artiste: Artiste){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    var json = "{\"Id\":" + Math.floor(Math.random() * 100) + ",\"Speudo\":\"" + artiste.Speudo + "\",\"First Name\":" + artiste.FirstName + ",\"Name\":" + artiste.Name + ",\"Age\":" + artiste.Age + ",\"Carrier Start\":" + artiste.CarrierStart + "}";
    return this.http
      .post(this.url2, json, options);
  }

  deleteArtiste(artiste: Artiste)
  {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    return this.http
      .delete(this.url + "/" + artiste.Id, options);
  }
}
