import { Pipe, PipeTransform } from '@angular/core';
import Movie from 'src/app/features/movies/models/movie';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {

  transform(value: Movie[], filterText: string): Movie[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((m:Movie)=>m.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}