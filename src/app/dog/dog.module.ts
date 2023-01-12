import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogInfoComponent } from './dog-info/dog-info.component';
import { DogPhotosComponent } from './dog-photos/dog-photos.component';


@NgModule({
  declarations: [DogInfoComponent, DogPhotosComponent],
  imports: [
    CommonModule
  ],
  exports: [DogInfoComponent, DogPhotosComponent]
})
export class DogModule { }
