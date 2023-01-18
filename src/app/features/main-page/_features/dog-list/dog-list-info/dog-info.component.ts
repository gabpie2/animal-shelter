import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationService } from 'src/app/core/api/information/information.service';
import { Dog } from 'src/app/core/api/information/information-interface';


@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css']
})
export class DogInfoComponent {

  public dogs$ = this.photosApi.getDogs() as Observable<Dog[]>

  constructor(private photosApi: InformationService) {}

}
