import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  topRatedMovie: any = [];
  totalLenght!: number;
  page: number = 1;

  constructor( public movieService: MovieService) { }

  ngOnInit(): void {
    this.loadTopRated(this.page)
  }

  loadTopRated(page: number){
    this.movieService
    .getTopRated(this.page)
    .subscribe( (res: any) => {
      this.topRatedMovie = res.results;
      this.totalLenght = res.total_results;
    })
  }

  showDetails(item: any){
    this.movieService.item = item;

  }
  changePage(event: any) {
    this.loadTopRated(this.page = event);
    window.scroll(0,0);
  }
}
