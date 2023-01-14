import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextOnImageComponent } from './text-on-image.component';


@NgModule({
  declarations: [TextOnImageComponent],
  imports: [
    CommonModule
  ],
  exports: [TextOnImageComponent]
})
export class TextOnImageModule { }
