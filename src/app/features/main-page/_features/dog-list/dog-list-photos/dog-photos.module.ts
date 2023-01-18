import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogPhotosComponent } from './dog-photos.component';


@NgModule({
  declarations: [DogPhotosComponent],
  imports: [
    CommonModule
  ],
  exports: [DogPhotosComponent]
})
export class DogPhotosModule { }
