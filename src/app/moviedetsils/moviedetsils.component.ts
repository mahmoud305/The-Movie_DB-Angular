import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

MoviesService
@Component({
  selector: 'app-moviedetsils',
  templateUrl: './moviedetsils.component.html',
  styleUrls: ['./moviedetsils.component.scss']
})
export class MoviedetsilsComponent implements OnInit {
  movieId:string="";
  mediaType:string="";
  imgPefix="https://image.tmdb.org/t/p/w500";
  movieDetails:any={};
  constructor(private _MoviesService:MoviesService ,private _ActivatedRoute:ActivatedRoute) {
    this.movieId= _ActivatedRoute.snapshot.params.movieId;
    this.mediaType=_ActivatedRoute.snapshot.params.mediaType;
    _MoviesService.getMovieDetails(this.movieId,this.mediaType).subscribe((movieDetails)=>{
      this.movieDetails=movieDetails;
      console.log(this.movieDetails);
    });
  }
convertTime(time:number){
  return `${Math.floor(time/60)}h${time%60}m`
}
  ngOnInit(): void {
  }

}
