import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  item: any = [];
  cast: any = [];
  similarMovies: any = [];
  movie: any = '';
  id: any = '';
  video: any = '';
  image: any = '';



  constructor(
    public movieService: MovieService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private location: Location,
    

  ) {
 

  }

  ngOnInit(): void {
    this.id = this.movieService.item.id;
    this.item = this.movieService.item;
    this.loadCredits(this.id);
    this.loadMovie(this.id);
    this.loadSimilar();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  };

  loadCredits(id: any) {
    this.movieService
      .getCredits(this.id)
      .subscribe(res => {
        this.cast = res.cast.slice(0, 5);
      });
  };


  loadMovie(id: any) {
    this.movieService
      .getMovie(this.id)
      .subscribe((res: any) => {
        this.movie = res.results[0].key;
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.movie}`)

      });
  };

  loadSimilar() {
    this.movieService
      .getSimilarMovie(this.id)
      .subscribe((res: any) => {
        this.similarMovies = res.results
      });

  };

  showDetails(item: any) {
    this.movieService.item = item;
  };

  loadImage(id: number) {
    this.movieService
      .getImage(this.id)
      .subscribe((res: any) => {
        this.image = res.backdrops;
      })
  };

  back(): void {
    this.location.back()
  
  };

}
