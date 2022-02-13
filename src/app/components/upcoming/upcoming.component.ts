import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  upcomingMovie: any = [];
  totalResults: any;
  totalLenght!: number;
  page: number = 1 ;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.loadUpcoming(this.page);
  }

  loadUpcoming(page: number){
    this.movieService
    .getUpcoming(this.page)
    .subscribe((res: any) =>{
      this.upcomingMovie = res.results;
      this.totalLenght = res.total_results;
    })
  }
  showDetails(item: any){
    this.movieService.item = item;

  }
  changePage(event: any) {
    this.loadUpcoming(this.page=event);
  }

}
