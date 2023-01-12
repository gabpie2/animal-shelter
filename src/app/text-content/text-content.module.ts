import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextContentComponent } from './text-content.component';



@NgModule({
  declarations: [
    TextContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TextContentComponent]
})
export class TextContentModule { }
