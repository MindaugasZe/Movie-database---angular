import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { GenresComponent } from './components/genres/genres.component';
import { PopularComponent } from './components/popular/popular.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie-detail', component: MovieDetailComponent},
  { path: 'popular', component: PopularComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'upcoming' , component: UpcomingComponent},
  { path: 'nowPlaying', component: NowPlayingComponent},
  { path: 'topRated', component: TopRatedComponent},
  { path: 'search', component: SearchComponent},
  { path: 'similar', redirectTo: 'movie-detail'},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
