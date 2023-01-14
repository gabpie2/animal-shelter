import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DogListModule } from './_features/dog-list/dog-list.module';
import { FooterModule } from './_features/footer/footer.module';
import { TextContentModule } from './_features/text-content/text-content.module';
import { MainPageComponent } from './main-page.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImageSliderComponent } from './_features/slider/image-slider/image-slider.component';
import { TextOnImageModule } from './_features/slider/text-on-image/text-on-image.module';


@NgModule({
  declarations: [MainPageComponent, ImageSliderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DogListModule,
    FooterModule,
    TextContentModule,
    NavbarModule,
    NgImageSliderModule,
    TextOnImageModule,
    HttpClientModule
  ],
  exports: [MainPageComponent, ImageSliderComponent]
})
export class MainPageModule { }
