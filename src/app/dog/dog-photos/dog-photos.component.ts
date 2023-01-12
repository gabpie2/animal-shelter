import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dog-photos',
  templateUrl: './dog-photos.component.html',
  styleUrls: ['./dog-photos.component.css']
})

export class DogPhotosComponent{
  photos=[] as any;
  constructor (private api: ApiService) {
    this.api.getData().subscribe(data => {
      console.warn(data)
      this.photos = data
      console.log(this.photos);
    })
  }
}
