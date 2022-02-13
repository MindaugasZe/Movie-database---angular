import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  searchStr: any ;

  constructor( public movieService: MovieService) { }

  ngOnInit(): void {
  }

  searchMovies() {
    this.movieService
    .searchMovies(this.searchStr)
    .subscribe(res => {
      this.movieService.searchRes = res.results;
      this.movieService.searchStr = this.searchStr;
      this.movieService.totalLenght = res.total_results;
      this.searchStr= '';
    });
  }

}
