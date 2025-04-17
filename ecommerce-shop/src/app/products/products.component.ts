import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isProductModalOpen = false;
  isEditProductModalOpen = false;

  products: any[] = [
    {
      id: 1,
      name: "product1",
      description: "description1",
      price: 100,
      image: "https://as1.ftcdn.net/v2/jpg/02/75/74/58/1000_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg",
      color: "brown",
    }
  ]
  product: any = {
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
    color: ""
  }
  createProduct(){
    this.products.push({
      ...this.product,
      id: this.products.length + 1
    });
    this.product = {
      id: "",
      name: "",
      description: ""
    }
    this.closeProductModal()
  }
  showProductModal() {
    this.isProductModalOpen = true;
  }
  selectProduct(id: number){
    this.product = Object.assign({}, this.products.find(product => product.id === id));
    this.showEditProductModal();
  }
  save(){
    const index = this.products.findIndex(product => product.id === this.product.id);
    this.products[index] = this.product;
    this.closeEditProductModal();
  }
  del(id: number){
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) {
      this.products.splice(index, 1); 
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
}
