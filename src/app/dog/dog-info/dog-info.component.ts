import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css']
})
export class DogInfoComponent {
  //dogs$ = this.http.get('/api/teams') as any;
  @Input() dogPhoto=[] as any;
  dogs$: Observable<any> = this.http.get('/api/dogs');
  constructor(private http: HttpClient) {}

  //////nic nie robi
  ngOnInit() {
  this.dogs$.pipe (
    map(dogs$ => 
     dogs$.filter((dog: { age: number; }) => dog.age < 5)) )
  }
}
