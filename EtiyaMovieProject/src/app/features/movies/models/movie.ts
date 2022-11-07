import { UrlTree } from '@angular/router';
export default interface Movie{   
	id: number;
	name: string;
    runtime:string;
    imdbRating:string;
    poster:UrlTree;
    category:string;
    year:string
    plot:string
    userId:number
}