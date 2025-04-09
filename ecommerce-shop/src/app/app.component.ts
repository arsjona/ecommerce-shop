

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  popupVisible = true;
  popupTitle = 'ProductInfo';
  popupMessage = 'ProductInfo';

  images = [
    { src: 'assets/image1.jpg', alt: 'Image 1', caption: 'This is image 1' },
    { src: 'assets/image2.jpg', alt: 'Image 2', caption: 'This is image 2' },
    { src: 'assets/image3.jpg', alt: 'Image 3', caption: 'This is image 3' },
    { src: 'assets/image4.jpg', alt: 'Image 4', caption: 'This is image 4' },
  ];

  openPopup(image: any) {
    this.popupTitle = image.alt;
    this.popupMessage = image.caption;
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
