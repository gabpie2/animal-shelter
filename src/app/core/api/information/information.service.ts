import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/core/api/information/information-interface';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]>{
    return this.http.get('/api/dogs') as Observable<Dog[]>;
  }
}
