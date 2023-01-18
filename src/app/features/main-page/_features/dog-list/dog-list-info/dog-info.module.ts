import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogInfoComponent } from './dog-info.component';


@NgModule({
  declarations: [DogInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [DogInfoComponent]
})
export class DogInfoModule { }
