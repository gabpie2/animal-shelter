import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = 'https://dog.ceo/api/breeds/image/random/10';
    return this.http.get(url);
  }
}
