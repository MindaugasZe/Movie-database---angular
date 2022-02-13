import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  id: any = '';
  genre: any = [];
  totalLenght!: number;
  page: number = 1;

  constructor( public movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.movieService.genreID;
    this.loadGenre(this.id, this.page);
  }

  loadGenre(id: number, page: number){
    this.movieService
    .getMoviesByGenre(this.id, this.page)
    .subscribe(( res: any) => {
      this.genre = res.results;
      this.totalLenght = res.total_results
    })
  }
  showDetails(item: any){
    this.movieService.item = item;
   

  }
  changePage(event: any) {
    this.loadGenre(this.id,this.page=event);
    window.scroll(0,0);
  }

}
