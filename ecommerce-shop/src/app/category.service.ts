import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Electronics', description: 'Electronic gadgets' },
    { id: 2, name: 'Clothing', description: 'Fashion wear' }
  ]);

  categories$ = this.categoriesSubject.asObservable();

  addCategory(category: any) {
    const current = this.categoriesSubject.value;
    this.categoriesSubject.next([...current, category]);
  }

  getCategories() {
    return this.categoriesSubject.value;
  }

}
