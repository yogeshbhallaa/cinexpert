import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowTime } from 'src/app/model/showtime';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
// Movie Detail Component 
export class MovieDetailComponent implements OnInit {
  movieId: any;
  movie = new Movie();
  Form: FormGroup;
  show1: ShowTime[] = [];
  show2: ShowTime[] = [];
  minDate: Date;
  maxDate: Date;
  selectedDate1: string = "";
  selectedDate: string = '03-10-2021';
  s: any;
  show = new ShowTime();
  time = '';
  selectedShowId: string;
  showtime: string;
  result: any[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private fb: FormBuilder,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.Form = this.fb.group(
      {
        datepick: [null, Validators.required]
      });
    this.movieId = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params) => {
        this.movieId = +params['id'];
        this.movieService.getMovie(this.movieId).subscribe(
          (data: Movie) => {
            this.movie = data;
            localStorage.setItem('movieName', this.movie.movieName);
            localStorage.setItem('url', this.movie.image);
          }
        )
        this.movieService.getShows().subscribe(
          (data) => {
            this.show1 = data;
            console.log(this.show1);
          }
        )
      }
    );
  }
  // My Date
  mydate(newDate) {
    this.selectedDate = newDate.value;
  }
  select1 = new FormGroup(
    {
      time: new FormControl()
    }
  )
  // Update Time
  updatetime() {
    let a = this.select1.get('time').value;
    this.selectedDate1 = a;
  }
  // Confirm
  confirm() {
    if (this.selectedDate1 == '') {
      this.router.navigate(['/seat-selection', this.movieId, this.selectedDate1]);
    } 
  }
}
