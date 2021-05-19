import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
   form!: FormGroup;
   Movies: any;
   searchMovie: any;
  constructor(private service: MovieServiceService) { }

  ngOnInit(): void {
  }

  getMovies() {
    this.Movies = [];
    console.log('searchMovie', this.searchMovie);
    this.service.getMovies(this.searchMovie)
    .subscribe(
      (resp: any) => {
         this.Movies = resp.Search;
      }, 
      err => {
        alert(err);
      }
    );
  }
  randomMovie() {
    this.Movies = [];
    this.service.getMovies('avengers')
    .subscribe(
      (resp: any) => {
         this.Movies = resp.Search;
      },
      err => {
        alert(err);
      }
    );
  }

  suggestMovie() {
    this.Movies = [];
    this.service.getMovies('antman')
    .subscribe(
      (resp: any) => {
         this.Movies = resp.Search;
      },
      err => {
        alert(err);
      }
    );
  }
}
