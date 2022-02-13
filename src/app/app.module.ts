import { MovieService } from './services/movie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PopularComponent } from './components/popular/popular.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgHttpLoaderModule } from 'ng-http-loader';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    PopularComponent,
    GenresComponent,
    UpcomingComponent,
    NowPlayingComponent,
    TopRatedComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgHttpLoaderModule.forRoot(),
    NgCircleProgressModule.forRoot({
      "radius": 25,
      "titleFontSize": "15",
      "titleColor": "#78C000",
      "outerStrokeWidth": 4,
      "subtitle": '',
      "unitsColor": "#78C000",
      "innerStrokeWidth": 0,
      "outerStrokeColor": "#78C000",
      "innerStrokeColor": "#C7E596",
      "animationDuration": 300,
    })
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
