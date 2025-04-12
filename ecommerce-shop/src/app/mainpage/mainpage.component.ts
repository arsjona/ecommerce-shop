import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mainpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
 constructor(private router: Router){}
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
  toOrderPage(){
  window.location.href='/order';
}
}
