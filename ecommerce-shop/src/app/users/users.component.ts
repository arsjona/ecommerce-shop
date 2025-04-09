import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
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
    if (index > -1) {
      this.users.splice(index, 1); 
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
