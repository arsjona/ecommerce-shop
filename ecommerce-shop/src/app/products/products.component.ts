import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const DEFAULT_PRODUCT = {
  id: "",
  name: "",
  description: "",
  price: "",
  image: "",
  color: ""
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  ngOnInit(): void {
    const savedProducts = localStorage.getItem("products");
    if(savedProducts){
      this.products = JSON.parse(savedProducts);
    }
  }


  isProductModalOpen = false;
  isEditProductModalOpen = false;

  products: any[] = []

  newProduct: any = DEFAULT_PRODUCT;
  selectedProduct: any = DEFAULT_PRODUCT;

  createProduct(){
    this.products.push({
      ...this.newProduct,
      id: this.products.length + 1
    });
    this.updateLocalStorage();
    this.newProduct = DEFAULT_PRODUCT;
    this.closeProductModal()
  }

  showProductModal() {
    this.isProductModalOpen = true;
  }

  selectProduct(id: number){
    this.selectedProduct = Object.assign({}, this.products.find(product => product.id === id));
    this.showEditProductModal();
  }

  save(){
    const index = this.products.findIndex(product => product.id === this.selectedProduct.id);
    this.products[index] = this.selectedProduct;
    this.updateLocalStorage();
    this.closeEditProductModal();
  }

  del(id: number){
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) {
      this.products.splice(index, 1); 
      this.updateLocalStorage();
    }
  }

  showEditProductModal() {
    this.isEditProductModalOpen = true;
  }

  closeProductModal() {
    this.isProductModalOpen = false;
  }

  closeEditProductModal() {
    this.isEditProductModalOpen = false;
  }

  updateLocalStorage(){
    localStorage.setItem("products", JSON.stringify(this.products));
  }
}
