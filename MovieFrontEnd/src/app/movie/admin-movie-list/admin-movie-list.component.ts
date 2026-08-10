import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-admin-movie-list',
  templateUrl: './admin-movie-list.component.html',
  styleUrls: ['./admin-movie-list.component.css']
})
// Admin Movie List
export class AdminMovieListComponent implements OnInit {
  movies: Array<Movie>;
  constructor(private movieService: MovieService, private route: Router, private alertify: AlertifyService) { }
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      data => {
        this.movies = data;
        console.log(this.movies);
      }
    )
  }
  // OnDelete
  onDelete(Id) {
    this.movieService.deleteMovieWithId(Id).subscribe
      (
        () => this.alertify.success("Deleted")
      );
    location.reload();
  }

  // On Edit
  onEdit(id) {
    this.route.navigate(['/edit-movie', id]);

  }
}
