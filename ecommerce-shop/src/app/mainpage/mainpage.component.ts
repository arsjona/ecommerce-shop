import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  isModalOpen = false;
  isProductModalOpen = false;

  selectedProduct = {
    color: '',
    size: '',
    price: ''
  };

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isProductModalOpen = false;
  }

  openProductModal(color: string, size: string, price: string) {
    this.selectedProduct = { color, size, price };
    this.isProductModalOpen = true;
  }
}
