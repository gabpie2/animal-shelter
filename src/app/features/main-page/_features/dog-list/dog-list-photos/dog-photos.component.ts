import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from '../../../../../core/api/photos/photos.service';
import { DogPhotos } from '../../../../../core/api/photos/photos-interface';

@Component({
  selector: 'app-dog-photos',
  templateUrl: './dog-photos.component.html',
  styleUrls: ['./dog-photos.component.css']
})

export class DogPhotosComponent{
  
  photos=[] as any;
  
  constructor (private photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
    })
  }

}
