import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Category from 'src/app/features/movies/models/category';
import { CategoriesService } from 'src/app/features/movies/services/categories.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Output() onBtnClick: any = new EventEmitter()
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
    this.onBtnClick.emit(category)

    console.log(category.name)
  }

}

