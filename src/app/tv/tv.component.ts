import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  allMedia:any=[];
  mediaPages:number[]=[1,2,3,4,5,6,7,8,9,10];
  imgPefix="https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getTvPage(1);
  }
  getTvPage(pageNumber:number){
    this._MoviesService. getAllMedia(pageNumber,"tv").subscribe((allMedia)=>{
      this.allMedia=allMedia.results;
    });
  }
}
