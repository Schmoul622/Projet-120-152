import { Injectable } from '@angular/core';
import {Album} from '../model/album';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  url: string = "http://localhost:5001/getAll/albums";
  album: Album;

  constructor(private http: HttpClient)
  { }

  getAlbums(): Observable<Album>{
    return this.http.get<Album>(this.url);
  }
}
