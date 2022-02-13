import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  totalLenght!: number;
  page: number = 1;

  popularMovie: any = [];

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.loadPopular(this.page);
  }


  loadPopular(page: number) {
    this.movieService
      .getPopular(this.page)
      .subscribe((res: any) => {
        this.popularMovie = res.results;
        this.totalLenght = res.total_results;
      })
  }
  showDetails(item: any) {
    this.movieService.item = item;
    console.log(item);
  }
  changePage(event: any) {
    this.loadPopular(this.page = event);
    window.scroll(0,0);
  }

}
