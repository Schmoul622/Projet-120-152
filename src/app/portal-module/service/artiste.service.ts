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
  url3: string = "https://localhost:5001/delete/artiste";
  url5: string = "https://localhost:5001/artistes/setAvatar";
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
    var json = "{\"Id\":" + Math.floor(Math.random() * 100) + ",\"Speudo\":\"" + artiste.Speudo + "\",\"FirstName\":\"" + artiste.FirstName + "\",\"Name\":\"" + artiste.Name + "\",\"Age\":" + artiste.Age + ",\"CarrierStart\":" + artiste.CarrierStart + ", \"Picture\":null}";
    return this.http
      .post(this.url2, json, options);
  }

  AddImageArtiste(id: number, image: File): Observable<File>
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url5 + '/' + id.toString() + '/picture', formData);
  }

  addImageArtiste(artiste: Artiste){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    var json = "{\"Picture\":\"" + artiste.Picture + "}";
    return this.http
      .post(this.url5, json, options);
  }

  deleteArtiste(artiste: Artiste) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    return this.http
      .delete(this.url3 + "/" + artiste.Id, options);
  }
}
