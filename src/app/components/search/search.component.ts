import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  topRatedMovie: any = [];
  totalLenght!: number;
  page: number = 1;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {

  }

  showDetails(item: any) {
    this.movieService.item = item;

  }
  changePage(event: any) {
    this.page = event;
    window.scroll(0,0);
    this.movieService.totalLenght = this.totalLenght;
  }

}
