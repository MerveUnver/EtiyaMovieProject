import { Component, OnInit } from '@angular/core';
import Category from 'src/app/features/movies/models/category';
import { CategoriesService } from 'src/app/features/movies/services/categories.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList!:Category[];
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {

      this.getCategories();
    ;
    
  }

  getCategories(){
    this.categoriesService.getList().subscribe((response) =>{
      this.categoryList = response;
    })
  }

  getCategoryById(category:Category){
    console.log(category)
  }

}

