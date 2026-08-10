import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/model/movie';
import { Review } from 'src/app/model/review';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
// User Review Component
export class UserReviewComponent implements OnInit {
  review: Review = {
    movieName: '',
    comments: '',
    userName: ''
  }
  arr: Review[]
  showtimes: Movie[];
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.review.userName = localStorage.getItem('user');
    this.movieService.getAllMovies().subscribe(
      data => {
        this.showtimes = data;
      }
    );
    this.movieService.getReviews().subscribe(
      data => {
        this.arr = data;
        console.log(this.arr);
      }
    )
  }
  select1 = new FormGroup(
    {
      time: new FormControl()
    }
  )
  review1() {
    let a = this.select1.get('time').value;
    this.review.movieName = a;
  }
  onSubmit() {
    console.log(this.review);
    this.movieService.addReview(this.review).subscribe(
      () => console.log("request")
    )
    location.reload();
  }
}
