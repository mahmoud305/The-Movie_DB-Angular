import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMedia:any=[];
  mediaPages:number[]=[1,2,3,4,5,6,7,8,9,10];
  imgPefix="https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService:MoviesService) { 
  }

  ngOnInit(): void {
   this.getMoviesPage(1);
  
  }

  getMoviesPage(pageNumber:number){
    this._MoviesService.getAllMedia(pageNumber,"movie").subscribe((allMedia)=>{
      this.allMedia=allMedia.results
    });
}


}
