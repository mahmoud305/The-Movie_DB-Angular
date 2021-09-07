import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any = [];
  trendingTv: any = [];
  trendingPersons: any = [];
imgPefix="https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService: MoviesService) { 
    
      this._MoviesService.getMoviesMedia("movie").subscribe((trendingMovies) => {
        this.trendingMovies = trendingMovies.results.slice(10);
        // alert("hello");
      });
 
  
 
      this._MoviesService.getMoviesMedia("tv").subscribe((trendingTv) => {
        this.trendingTv = trendingTv.results.slice(10);
      });
  
   
      this._MoviesService.getMoviesMedia("person").subscribe((trendingPersons) => {
        this.trendingPersons = trendingPersons.results.slice(10);
      });
 

  }

  
  ngOnInit(): void {
  }

}
 

