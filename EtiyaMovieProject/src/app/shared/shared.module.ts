import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ShowcaseComponent,
    OverlayTitleComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    OverlayTitleComponent,
    CategoryListComponent
  ]
})
export class SharedModule { }
