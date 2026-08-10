import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/model/imovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
// Movie List Component
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];
  searchText: string = '';
  from: string = '';
  to: string = '';
  private _text: string;
  Movie = '';
  filterMovie: Movie[] = [];
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.movies = this.route.snapshot.data.results;
    this.filterMovie = this.movies;
  }
  get text(): string { return this._text }
  set text(value: string) {
    this._text = value
    this.filterMovie = this.filtering(value)
  }
  //filtering
  filtering(value: string): Movie[] {
    value = value.toLowerCase()
    return this.movies.filter((xyz: Movie) => xyz.movieName.toLowerCase().includes(value));
  }
  // On Search
  onSearch() {
    if (this.from == '' || this.to == '') {
      return;
    }
    this.filterMovie = [];
    for (let i of this.movies) {
      if (i.releaseDate >= this.from && i.releaseDate <= this.to) {
        this.filterMovie.push(i)
      }
    }
  }
  // On Clear
  onClear() {
    this.filterMovie = [];
    this.filterMovie = this.movies;
    this.from = '';
    this.to = '';
  }
}
