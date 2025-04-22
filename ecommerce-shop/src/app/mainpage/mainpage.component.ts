import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{OrderService} from'../order.service';
@Component({
  selector: 'app-mainpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
 constructor(private router: Router, private orderService: OrderService){}
  isModalOpen = false;
  isProductModalOpen = false;
  username = "";
  password = "";
  isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  selectedProduct = {
    color: '',
    size: '',
    price: ''
  };

  logout() {
    this.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", "false");
  }
 

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
    this.orderService.setProduct(this.selectedProduct);
    this.router.navigate(['/order']);
  }
  login(){
    if(this.username === "admin" && this.password === "1234"){
      localStorage.setItem("isLoggedIn", "true");
      this.isLoggedIn = true;
      window.location.href = "/admin"
    } else {
      alert("wrong username/password combo")
    }
  }
}
