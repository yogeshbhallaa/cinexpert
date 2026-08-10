import { Component, Input, OnInit } from '@angular/core'
import { Movie } from 'src/app/model/movie';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
// Movie Card  Component 
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie
  movies: Array<Movie>
  searchTerm: string;
  constructor() { }

  ngOnInit() {

  }

  getPoster(): string {
    if (this.movie?.image && this.movie.image.trim()) {
      return this.movie.image;
    }
    const key = (this.movie?.movieName || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const posters: { [key: string]: string } = {
      'inception': 'assets/posters/inception.png',
      'interstellar': 'assets/posters/interstellar.png',
      'oppenheimer': 'assets/posters/oppenheimer.png',
      'dune-part-two': 'assets/posters/dune-part-two.png',
      'the-dark-knight': 'assets/posters/the-dark-knight.png',
      'the-matrix': 'assets/posters/the-matrix.png',
      'avengers-endgame': 'assets/posters/avengers-endgame.png',
      'top-gun-maverick': 'assets/posters/top-gun-maverick.png'
    };
    return posters[key] || 'assets/posters/inception.png';
  }

}
