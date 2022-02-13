import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovie: any = [];
  genres: any = [];
  id: any = '';
  page: number = 1;
  searchRes: any = [];

  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit(): void {

    this.loadPopular(1);
    this.loadGenre();
  }
  


  loadPopular(page: number) {
    this.movieService
      .getPopular(this.page)
      .subscribe((data: any) => {
        this.popularMovie = data.results;
        
      })
  }

  loadGenre() {
    this.movieService
      .getGenre()
      .subscribe((data: any) => {
        this.genres = data.genres
        

      })

  }
  showDetails(item: any) {
    this.movieService.item = item;
  }

  showGenres(id: any, name: string) {
    this.movieService.genreID = id;
    this.movieService.name = name;
  }
}


