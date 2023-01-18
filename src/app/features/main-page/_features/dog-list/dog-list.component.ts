import { Component, ViewChild } from '@angular/core';
import { DogInfoComponent } from './dog-list-info/dog-info.component';
import { DogPhotosComponent } from './dog-list-photos/dog-photos.component';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/core/api/information/information-interface';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
  @ViewChild(DogInfoComponent) dogInfo: any;

  listOfDogs$!: Observable<Dog[]>;

  @ViewChild(DogPhotosComponent) dogPhotos: any;

  listOfPhotos = [] as any;

  constructor() {}

  ngAfterViewInit() {
    this.listOfDogs$ = this.dogInfo.dogs$;
    this.listOfPhotos = this.dogPhotos.photos;
  }
}
