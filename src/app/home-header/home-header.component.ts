import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
trendingMovies: any = [];
  constructor(private _MoviesService:MoviesService) {/* i canot take it as input as i want all the movies not the first 10 only  */
    this._MoviesService.getMoviesMedia("movie").subscribe((trendingMovies) => {
      this.trendingMovies = trendingMovies.results;
      // alert("hello");
    });
   }
 
  @Input() imgPrefix: string = "";

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    navText: ['', ''],
    responsive: {// number of movies appeares in a certain screen size {media query }
      0: {// from 0--->400 one item 
        items: 1
      },
      400: {// from 400--->740 two item 
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
