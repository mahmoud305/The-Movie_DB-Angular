import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getMoviesMedia(mediaType:string):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=88aa63dadeb31196c2c990505fbc33db`);
  }

  getMovieDetails(movie_id:string,mediaType:string):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${movie_id}?api_key=88aa63dadeb31196c2c990505fbc33db&language=en-US`);
  }

  getAllMedia(pageNumber:number ,mediaType:string):Observable<any>//takes page number and media type{tv , movie}
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=88aa63dadeb31196c2c990505fbc33db&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }
}
