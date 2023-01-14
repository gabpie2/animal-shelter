import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogInfoComponent } from './dog-list-info/dog-info.component';
import { DogPhotosComponent } from './dog-list-photos/dog-photos.component';


@NgModule({
  declarations: [DogInfoComponent, DogPhotosComponent],
  imports: [
    CommonModule
  ],
  exports: [DogInfoComponent, DogPhotosComponent]
})
export class DogListModule { }
