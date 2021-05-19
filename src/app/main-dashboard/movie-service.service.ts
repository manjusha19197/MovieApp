import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private baseUrl = "http://www.omdbapi.com/";
  constructor(private http: HttpClient) { }

  getMovies(movie: any) {
    return this.http.get(this.baseUrl + '?s=' + movie + '&apikey=311dec33');
  }

  getRandomMovies() {
    return this.http.get('http://www.omdbapi.com/?s=avengers&apikey=311dec33');
  }

  getSuggestedMovies() {
    return this.http.get('http://www.omdbapi.com/?s=antman&apikey=311dec33');
  }
}
