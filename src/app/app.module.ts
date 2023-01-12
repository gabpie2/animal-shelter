import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { NavbarModule } from './navbar/navbar.module';
import { DogModule } from 'C:/Users/gabi9/OneDrive/Dokumenty/animal-shelter/src/app/dog/dog.module';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TextContentModule } from './text-content/text-content.module';
//import Pipe i w deklaracji, teraz jest w DogModule

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgImageSliderModule,
    NavbarModule,
    DogModule,
    TextContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
