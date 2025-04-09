import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isUserModalOpen = false;
  isEditUserModalOpen = false;
  isCategoryModalOpen = false;

  roles = ["User", "Project Manager", "Admin"]

  users: any[] = [
    {
      id: 1,
      username: "Ujeza",
      email: "ujeza@mail.net",
      role: "Admin"
    }
  ]

  user: any = {
    id: "",
    username: "",
    email: "",
    role: ""
  }

  createUser(){
    this.users.push({
      ...this.user,
      id: this.users.length + 1
    });
    this.user = {
      id: "",
      username: "",
      email: "",
      role: ""
    }
    this.closeUserModal()
  }

  showUserModal() {
    this.isUserModalOpen = true;
  }

  selectUser(id: number){
    this.user = Object.assign({}, this.users.find(user => user.id === id));
    this.showEditUserModal();
  }

  save(){
    const index = this.users.findIndex(user => user.id === this.user.id);
    this.users[index] = this.user;
    this.closeEditUserModal();
  }

  del(id: number){
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) { // only splice array when item is found
      this.users.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  showEditUserModal() {
    this.isEditUserModalOpen = true;
  }

  showCategoryModal() {
    this.isCategoryModalOpen = true;
  }


  closeUserModal() {
    this.isUserModalOpen = false;
  }

  closeEditUserModal() {
    this.isEditUserModalOpen = false;
  }

  closeCategoryModal() {
    this.isCategoryModalOpen = false;
  }

}
