import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { IShowTime } from 'src/app/model/ishowtime';
import { Movie } from 'src/app/model/movie';
import { ShowTime } from 'src/app/model/showtime';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MovieService } from 'src/app/services/movie.service'
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
// Edit Movie Component
export class EditMovieComponent implements OnInit {
  movieView: Movie = {
    movieName: '',
    movieType: '',
    movieDescription: '',
    language: '',
    length: '',
    directedBY: '',
    category: '',
    releaseDate: '',
    rating: '',

  };
  addMovieForm: FormGroup;
  movies: Array<Movie>;
  imgFile: string;
  show1: ShowTime;
  nextClicked: boolean;
  movie?: Movie
  show = new ShowTime();
  movieList: any[];
  @ViewChild('formTabs') formTabs: TabsetComponent;
  cat: string = 'qwerty';
 
  updateForm: FormGroup;
  showtimeViewX: IShowTime[] = [];
  showtimeView: IShowTime = {
    moviename: '',
    date: '',
    time: '',
    fare: '',

  };
  showtimes: any[];
  arr: any[] = [];
  Movieid: number = 0;

  constructor(private Route: ActivatedRoute, private fb: FormBuilder, private router: Router, private movieService: MovieService, private datePipe: DatePipe, private alertify: AlertifyService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.Movieid = this.Route.snapshot.params['id'];
    console.log(this.Movieid);
    this.movieService.getAllMovies().subscribe(
      data => {
        this.movies = data;
        for (let i of data) {
          console.log(i.movieType);
          if (i.id == this.Movieid) {
            this.movie = i;
            console.log(this.movie)
            break;
          }
        }
      }
    )
    console.log(this.movie)
    this.movieService.getShows().subscribe(data => {
      for (let i of data) {
        if (i.movieName == this.movie.movieName) {
          this.arr.push(i);
        }
      }
      console.log(this.arr)
    })
  }

  mapProperty(): void {
  }
  // On Submit
  onSubmit() {
        console.log(this.movie);
this.movieService.updateMovie(this.Movieid, this.movie).subscribe(
      () => console.log("request served")
    );
    for (let i of this.arr) {
      i.moviename = this.movie.movieName;
      this.movieService.updateShow(i.id, i).subscribe(
        () => console.log("requesed aa gi")
      )
    }
    this.router.navigate(['/admin/movies']);
  }
}
