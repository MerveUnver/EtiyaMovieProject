import { MoviesService } from './../../../features/movies/services/movies.service';
import Movie from 'src/app/features/movies/models/movie';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Category from 'src/app/features/movies/models/category';
import { CategoriesService } from 'src/app/features/movies/services/categories.service';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Output() onBtnClick: any = new EventEmitter()
  categoryList!:Category[];
  tappedCategory!:Category;
  
  constructor(private categoriesService:CategoriesService,private moviesService:MoviesService) { }

  ngOnInit(): void {
      this.getCategories();
  }
  getCategories(){
    this.categoriesService.getList().subscribe((response) =>{
      this.categoryList = response;
      for (let index = 0; index < this.categoryList.length; index++) {
        const element = this.categoryList[index];
        element.isSelected = false
      }
    })
  }

  getCategoryById(category:Category){
    this.onBtnClick.emit(category);
    this.updateSelectedCategory(category);
  }

  updateSelectedCategory(category:Category) {
    //this.onBtnClick.emit(category.isSelected = true);
    var category = this.categoryList.filter((element) => element.id == category.id)[0]
    category.isSelected = true
    for (let index = 0; index < this.categoryList.length; index++) {
      const element = this.categoryList[index];
      if(element.id != category.id) {
        element.isSelected = false
      }
    }
    
  }
}

