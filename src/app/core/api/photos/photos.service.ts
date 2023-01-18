import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogPhotos } from 'src/app/core/api/photos/photos-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<DogPhotos[]>{
    return this.http.get('https://dog.ceo/api/breeds/image/random/10') as Observable<DogPhotos[]>;
  }
} 
