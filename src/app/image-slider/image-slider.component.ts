import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})

export class ImageSliderComponent {
  
  @ViewChild('nav') //działanie
  slider!: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: 'http://www.telekarma.pl/userfiles/images/aktualnosci/305464337-760x500.jpg',
    thumbImage: 'http://www.telekarma.pl/userfiles/images/aktualnosci/305464337-760x500.jpg',
    alt: 'alt of image',
    title: 'piesek ;)'
    },
    {image: 'https://ocdn.eu/images/pulscms/NTY7MDA_/fc66a5b4086e7ef2800f2eb8b0815713.jpg',
    thumbImage: 'https://ocdn.eu/images/pulscms/NTY7MDA_/fc66a5b4086e7ef2800f2eb8b0815713.jpg',
    alt: 'alt of image',
    title: 'kolejny piesek owo'}]

}
