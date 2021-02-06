import { Observable } from 'rxjs';
import {Artiste} from '../model/artiste';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  url: string = "https://localhost:5001/getAll/artistes";
  url6: string = "https://localhost:5001/getSingle/artiste";
  url2: string = "https://localhost:5001/create/artiste";
  url3: string = "https://localhost:5001/delete/artiste";
  url4: string = "https://localhost:5001/update/artiste";
  url5: string = "https://localhost:5001/artistes/setAvatar";
  artiste: Artiste;

  constructor(private http: HttpClient)
  { }

  getArtistes(): Observable<Array<Artiste>>{
    return this.http.get<[Artiste]>(this.url);
  }

  getSingleArtiste(artiste: Artiste): Observable<Artiste>{
    return this.http.get<Artiste>(this.url6 + "/" + artiste.Id);
  }

  getCurrentArtiste(artiste: Artiste){
    this.getSingleArtiste(artiste).subscribe(
      data =>{
        if (data){
          this.artiste = data;
          }
        },
        error => {
        }
    );
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

  EditArtiste(artiste: Artiste){
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }
    var json = "{\"Picture\":\"" + artiste.Picture + "\",\"Speudo\":\"" + artiste.Speudo + "\",\"FirstName\":\"" + artiste.FirstName + "\",\"Name\":\"" + artiste.Name + "\",\"Age\":" + artiste.Age + ",\"CarrierStart\":" + artiste.CarrierStart + "}";
    return this.http
      .post(this.url4 + "/" + artiste.Id, json, options);
  }

  AddImageArtiste(id: number, image: File)
  {
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>("https://localhost:5001/artistes/" + id.toString() + "/setAvatar", formData)
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
