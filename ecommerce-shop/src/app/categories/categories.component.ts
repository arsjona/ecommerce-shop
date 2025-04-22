import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports: [CommonModule,FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  isCategoryModalOpen = false;
  isEditCategoryModalOpen = false;
  isDeleteCategoryModalOpen = false;

  categories: any[] = [
    {
      id: 1,
      name: "category1",
      description: "description1",
    }
  ]

  category: any = {
    id: "",
    name: "",
    description: ""
  }

  createCategory(){
    this.categories.push({
      ...this.category,
      id: this.categories.length + 1
    });
    this.category = {
      id: "",
      name: "",
      description: ""
    }
    this.closeCategoryModal()
  }

  showCategoryModal() {
    this.isCategoryModalOpen = true;
  }

  selectCategory(id: number){
    this.category = Object.assign({}, this.categories.find(category => category.id === id));
    this.showEditCategoryModal();
  }

  save(){
    const index = this.categories.findIndex(category => category.id === this.category.id);
    this.categories[index] = this.category;
    this.closeEditCategoryModal();
  }

  del(id: number){
    const index = this.categories.findIndex(category => category.id === id);
    if (index > -1) {
      this.categories.splice(index, 1); 
    }
  }

  showEditCategoryModal() {
    this.isEditCategoryModalOpen = true;
  }

  closeCategoryModal() {
    this.isCategoryModalOpen = false;
  }

  closeEditCategoryModal() {
    this.isEditCategoryModalOpen = false;
  }
}
