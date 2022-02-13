import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  nowPlayingMovie: any = [];
  totalLenght!: number;
  page: number = 1;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNowPlaying(this.page);
  }

  loadNowPlaying(page: number) {
    this.movieService
      .getNowPlaying(this.page)
      .subscribe((res: any) => {
        this.nowPlayingMovie = res.results;
        this.totalLenght = res.total_results;

      })
  }

  showDetails(item: any) {
    this.movieService.item = item;
    console.log(item);
  }
  changePage(event: any) {
    this.loadNowPlaying(this.page = event);
    window.scroll(0,0);
  }


}
