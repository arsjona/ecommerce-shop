import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import{OrderService} from'../order.service';

@Component({
  selector: 'app-mainpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
 constructor(private router: Router, private orderService: OrderService){}
  ngOnInit(): void {
    const savedProducts = localStorage.getItem("products");
    if(savedProducts){
      this.products = JSON.parse(savedProducts);
    }
  }
  isModalOpen = false;
  isProductModalOpen = false;
  username = "";
  password = "";
  products: any[] = [];
  isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  selectedProduct = {
    name: "",
    description: "",
    color: "",
    size: "",
    price: ""
  };

  logout() {
    this.isLoggedIn = false;
    localStorage.setItem("isLoggedIn", "false");
  }

  private _search = '';

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    let allProducts: any[] = [];
    const productsFromLocalStorage = localStorage.getItem("products");
    if(productsFromLocalStorage){
      allProducts = JSON.parse(productsFromLocalStorage);
    }
    this.products = allProducts.filter((product) => product.name.toLowerCase().includes(value));
  }

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isProductModalOpen = false;
  }

  openProductModal(id: string) {
    this.selectedProduct = Object.assign({}, this.products.find(product => product.id === id));
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
