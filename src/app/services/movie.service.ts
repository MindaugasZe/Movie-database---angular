import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  item: any = [];
  id: any ='';
  name: string = '';
  genreID: any = [];
  searchRes: any = [];
  searchStr: string = '';
  totalLenght: any = '';
 

  url: string = 'https://api.themoviedb.org/3/';
  key: string = 'api_key=d9621b9bf85ce20eabe3e682b7a7c444';
  language: string = 'en';

  constructor( public http: HttpClient) { }


  getPopular(page: number): Observable<any>{
    return this.http.get(`${this.url}movie/popular?${this.key}&page=${page}&language=${this.language}`)
  };

  getGenre(): Observable<any>{
    return this.http.get(`${this.url}/genre/movie/list?${this.key}&language=${this.language}`)
  };

  getCredits(id: number): Observable<any>{
    return this.http.get(`${this.url}movie/${id}/credits?${this.key}&language=${this.language}`)
    
  };

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.url}movie/${id}/videos?${this.key}`);
  };

  getMoviesByGenre(id: string, page: number): Observable<any> {
    return this.http.get(`${this.url}genre/${id}/movies?${this.key}&page=${page}&language=${this.language}`)
  };

  getUpcoming(page: number): Observable<any>{
    return this.http.get(`${this.url}movie/upcoming?${this.key}&page=${page}&language=${this.language}`)
  };

  getNowPlaying(page: number): Observable<any>{
    return this.http.get(`${this.url}movie/now_playing?${this.key}&page=${page}&language=${this.language}`)
  };

  getTopRated(page: number): Observable<any>{
    return this.http.get(`${this.url}movie/top_rated?${this.key}&page=${page}&language=${this.language}`)
  };

  getSimilarMovie(id: number):Observable<any>{
    return this.http.get(`${this.url}movie/${id}/similar?${this.key}&language=${this.language}`)
  };

  getImage(id: number): Observable<any>{
    return this.http.get(`${this.url}movie/${id}/images?${this.key}&language=${this.language}`)

  };

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${this.url}search/movie?${this.key}&query=${searchStr}`);
  };
  
  
}


