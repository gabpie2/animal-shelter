import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list.component';
import { DogInfoModule } from './dog-list-info/dog-info.module';
import { DogPhotosModule } from './dog-list-photos/dog-photos.module';

@NgModule({
  declarations: [DogListComponent],
  imports: [
    CommonModule,
    DogInfoModule,
    DogPhotosModule
  ],
  exports: [DogListComponent]
})
export class DogListModule { }
