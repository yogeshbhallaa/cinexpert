import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Booking } from 'src/app/model/booking';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
// Seat Selection
export class SeatSelectionComponent implements OnInit {
  seats: number = 0;
  TotalAmount: number = 0;
  totalFare: number = 0;
  showtimes: any[];
  fare: number;
  taa: string;
  totalSeats: number = 100;
  remaining: any;
  booking: Booking = {
    userName: '',
    movieName: '',
    numberOfSeats: null,
    totalAmount: 0,
    movieDate: '',
    time: '',
  }
  Movieid: number = 0;
  date: string;
  MName: string = '';
  arr: any[] = [];
  Url: any;
  constructor(private router: Router,
    private movieService: MovieService,
    private Route: ActivatedRoute,
    private alertify: AlertifyService) {
  }

  ngOnInit() {
    this.Movieid = this.Route.snapshot.params['id'];
    this.MName = localStorage.getItem('movieName');
    this.Url = localStorage.getItem('url');
    this.date = this.Route.snapshot.params['date'];
    this.movieService.getShows().subscribe(data => {
      this.showtimes = data;
      for (let i of data) {
        if (i.movieName === this.MName) {
          this.arr.push(i);
        }
      }
      this.showtimes = this.arr;
    })
  }
  select = new FormGroup(
    {
      name: new FormControl()
    }
  )
  select1 = new FormGroup(
    {
      time: new FormControl()
    }
  )
  amount: number = 0;
  update() {
    this.totalSeats = 100;
    let a = this.select.get('name').value;
    this.seats = parseInt(a);
    this.totalSeats -= a;
    this.TotalAmount = a * 100;
  }
  time: string;
  // Update Time
  updatetime() {
    let a = this.select1.get('time').value;
    this.time = a;
    for (let i of this.showtimes) {
      if (i.time == this.time) {
        this.amount = i.fare;
        break;
      }
    }
    console.log(this.time)
    console.log(this.amount)
    this.TotalAmount = this.seats*2;
  }
  No(value) {
    this.remaining = this.totalSeats - value;
    this.totalSeats = this.remaining;
  }
  // On Submit
  onsubmit() {
    this.mapBooking();
    if (this.booking.numberOfSeats == 0  || this.booking.totalAmount == 0) {
      this.alertify.error("Fill Seats");
    }
    else {
      this.movieService.addBooking(this.booking).subscribe(
        () => console.log("request")
      );
      this.alertify.success("Successfully Booked a Movie");
      this.router.navigate(['/my-bookings']);
      localStorage.removeItem('url');
    }
  }
  mapBooking(): void {
    this.booking.MovieId = this.Movieid;
    this.booking.movieName = localStorage.getItem('movieName');
    this.booking.userName = localStorage.getItem('user');
    this.booking.numberOfSeats = this.seats;
    this.booking.totalAmount = this.TotalAmount;
    this.booking.time = this.time;
    this.booking.movieDate = this.date;
  }
}
