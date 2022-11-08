import { UrlTree } from '@angular/router';
export default interface Movie{   
	id: number;
	name: string;
    runtime:string;
    imdbRating:string;
    poster:UrlTree;
    categoryId:number;
    year:string
    plot:string
    userId:number
}