import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})

export class ImageSliderComponent {
  
  @ViewChild('nav') 
  slider!: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: '../assets/fluffy-dogs.jpg',
    thumbImage: '../assets/fluffy-dogs.jpg',
    alt: 'alt of image',
    title: ' '
    },
    {image: '../assets/pup.jpg',
    thumbImage: '../assets/pup.jpg',
    alt: 'alt of image',
    title: ' '
    },
    {image: '../assets/unicorn-pug.jpg',
    thumbImage: '../assets/unicorn-pug.jpg',
    alt: 'alt of image',
    title: ' '
    },
    {image: '../assets/standing-dog.jpg',
    thumbImage: '../assets/standing-dog.jpg',
    alt: 'alt of image',
    title: ' '}]

}
